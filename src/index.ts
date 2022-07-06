import {Credentials} from "./types/global.types";

export class TrelloEventHandler {
    #credentials: Credentials;
    #boards: string[];
    #timer: number;

    constructor(key: string, token: string) {
        this.#credentials = {key, token}
        this.#boards = [];
        this.#timer = 0;
    }
}