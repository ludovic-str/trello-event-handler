import { EventType } from "./types/global.types";
import { TrelloAction } from "./types/formatedType/formated.types";
export declare class TrelloEventHandler {
    #private;
    constructor(key: string, token: string);
    start(): void;
    stop(): void;
    on(event: EventType, callback: (args: TrelloAction) => void): void;
    addBoardFromUrl(url: string, name: string): Promise<string | null>;
    addBoardFromId(id: string, name: string): Promise<string | null>;
    removeBoadByName(name: string): boolean;
    private getBoardActivity;
    private poll;
}
//# sourceMappingURL=index.d.ts.map