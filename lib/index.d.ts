import { Credentials, EventType } from "./types/global.types";
import { TrelloAction } from "./types/formatedType/formated.types";
export declare class TrelloEventHandler {
    #private;
    readonly credentials: Credentials;
    constructor(key: string, token: string);
    start(): void;
    stop(): void;
    on(event: EventType, callback: (args: TrelloAction) => void): void;
    addBoardFromUrl(url: string, name: string): void;
    addBoardFromId(id: string, name: string): void;
    removeBoadByName(name: string): boolean;
    private getBoardActivity;
    private poll;
}
//# sourceMappingURL=index.d.ts.map