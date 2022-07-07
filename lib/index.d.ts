import { Credentials } from "./types/global.types";
import { ActionData } from "./types/request/action.types";
export declare class TrelloEventHandler {
    #private;
    readonly credentials: Credentials;
    constructor(key: string, token: string);
    start(): void;
    stop(): void;
    on(event: string, callback: (args: ActionData) => void): void;
    addBoardFromUrl(url: string): void;
    addBoardFromId(id: string): void;
    private getBoardActivity;
    private poll;
}
//# sourceMappingURL=index.d.ts.map