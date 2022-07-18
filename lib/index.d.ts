import { BoardListInfo, EventType } from "./types/global.types";
import { TrelloAction } from "./types/formatedType/formated.types";
export declare class TrelloEventHandler {
    #private;
    constructor(key: string, token: string);
    start(): void;
    stop(): void;
    on(event: EventType, callback: (args: TrelloAction) => void): void;
    addBoardFromUrl(url: string): Promise<BoardListInfo | null>;
    addBoardFromId(id: string): Promise<BoardListInfo | null>;
    removeBoadByName(name: string): boolean;
    private getBoardActivity;
    private boardIdAlreadyExist;
    private boardNameAlreadyExist;
    private poll;
}
//# sourceMappingURL=index.d.ts.map