import { EventEmitter } from "events";

import { Credentials } from "./types/global.types";
import fetchBoardInfo from "./fetchBoardInfo";
import { ActionData } from "./types/request/action.types";

export class TrelloEventHandler {
  readonly credentials: Credentials;
  #lastUpdate: number;
  #e: EventEmitter;
  #boards: string[];

  constructor(key: string, token: string) {
    this.credentials = { key, token };
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

  on(event: string, callback: (args: ActionData) => void) {
    this.#e.on(event, callback);
  }

  addBoardFromUrl(url: string) {
    const boardId = url.split("/")[4];
    this.#boards.push(boardId);
    console.log(this.#boards);
  }

  addBoardFromId(id: string) {
    this.#boards.push(id);
  }

  private async getBoardActivity(boardId: string) {
    const data = await fetchBoardInfo(this.credentials, boardId);
    if (data === null) return;
    for (let action of data) {
      if (new Date(action.date).getTime() > this.#lastUpdate) {
        this.#e.emit(action.type, action);
      }
    }
    this.#lastUpdate = Date.now();
    console.log("test");
  }

  private poll(ref: TrelloEventHandler) {
    ref.#boards.forEach((id) => ref.getBoardActivity(id));
  }
}
