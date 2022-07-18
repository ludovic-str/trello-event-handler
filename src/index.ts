import { EventEmitter } from "events";

import { BoardListInfo, Credentials, EventType } from "./types/global.types";
import fetchActionsInfos from "./fetchActionsInfos";
import formatAction from "./format";
import { TrelloAction } from "./types/formatedType/formated.types";
import fetchBoardInfos from "./fetchBoardInfo";

export class TrelloEventHandler {
  #credentials: Credentials;
  #lastUpdate: number;
  #e: EventEmitter;
  #boards: BoardListInfo[];

  constructor(key: string, token: string) {
    this.#credentials = { key, token };
    this.#lastUpdate = Date.now();
    this.#boards = [];
    this.#e = new EventEmitter();
  }

  start() {
    const ref = this;
    setInterval(() => {
      this.poll(ref);
    }, 60 * 1000);
  }

  stop() {
    clearInterval();
  }

  on(event: EventType, callback: (args: TrelloAction) => void) {
    this.#e.on(event, callback);
  }

  async addBoardFromUrl(url: string): Promise<string | null> {
    const boardId = url.split("/")[4];
    const boardInfos = await fetchBoardInfos(this.#credentials, boardId);

    if (boardInfos === null) return null;
    if (
      this.boardIdAlreadyExist(boardId) ||
      this.boardNameAlreadyExist(boardInfos.name)
    )
      return null;

    this.#boards.push({ id: boardId, name: boardInfos.name });
    return boardInfos.name;
  }

  async addBoardFromId(id: string): Promise<string | null> {
    const boardInfos = await fetchBoardInfos(this.#credentials, id);

    if (boardInfos === null) return null;
    if (
      this.boardIdAlreadyExist(id) ||
      this.boardNameAlreadyExist(boardInfos.name)
    )
      return null;

    this.#boards.push({ id, name: boardInfos.name });
    return boardInfos.name;
  }

  removeBoadByName(name: string): boolean {
    const boardIndex = this.#boards.findIndex((item) => item.name === name);
    if (boardIndex === -1) return false;
    this.#boards.splice(boardIndex, 1);
    return true;
  }

  private async getBoardActivity(boardId: string) {
    const data = await fetchActionsInfos(this.#credentials, boardId);
    if (data === null) return;

    for (let action of data) {
      if (new Date(action.date).getTime() < this.#lastUpdate) break;
      const formatedData = formatAction(action);
      if (formatedData !== null)
        this.#e.emit(formatedData.action.type, formatedData);
    }

    this.#lastUpdate = Date.now();
  }

  private boardIdAlreadyExist(id: string): boolean {
    const existingBoard = this.#boards.find((board) => board.id === id);

    return existingBoard === undefined ? false : true;
  }

  private boardNameAlreadyExist(name: string): boolean {
    const existingBoard = this.#boards.find((board) => board.name === name);

    return existingBoard === undefined ? false : true;
  }

  private poll(ref: TrelloEventHandler) {
    ref.#boards.forEach((board) => ref.getBoardActivity(board.id));
  }
}
