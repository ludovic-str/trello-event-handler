import { EventEmitter } from "events";

import { BoardListInfo, Credentials, EventType } from "./types/global.types";
import fetchBoardInfo from "./fetchBoardInfo";
import { RawActionData } from "./types/request/action.types";
import formatAction from "./format";
import { TrelloAction } from "./types/formatedType/formated.types";

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

  addBoardFromUrl(url: string, name: string) {
    const boardId = url.split("/")[4];
    this.#boards.push({ id: boardId, name });
  }

  addBoardFromId(id: string, name: string) {
    this.#boards.push({ id, name });
  }

  removeBoadByName(name: string): boolean {
    const boardIndex = this.#boards.findIndex((item) => item.name === name);
    if (boardIndex === -1) return false;
    this.#boards.splice(boardIndex, 1);
    return true;
  }

  private async getBoardActivity(boardId: string) {
    const data = await fetchBoardInfo(this.#credentials, boardId);
    if (data === null) return;
    for (let action of data) {
      if (new Date(action.date).getTime() < this.#lastUpdate) break;
      const formatedData = formatAction(action);
      if (formatedData !== null)
        this.#e.emit(formatedData.action.type, formatedData);
    }
    this.#lastUpdate = Date.now();
  }

  private poll(ref: TrelloEventHandler) {
    ref.#boards.forEach((board) => ref.getBoardActivity(board.id));
  }
}
