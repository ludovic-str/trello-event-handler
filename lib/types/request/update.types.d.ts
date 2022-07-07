import { Board } from "./action.types";
interface Card {
    closed: boolean | undefined;
    idList: string | undefined;
    id: string;
    name: string;
    idShort: string;
    shortLink: string;
    desc: string | undefined;
}
interface Old {
    idList: string | undefined;
    closed: boolean | undefined;
    desc: string | undefined;
}
interface List {
    id: string;
    name: string;
}
export interface UpdateData {
    card: Card;
    board: Board;
    list: List;
    old: Old;
}
export {};
//# sourceMappingURL=update.types.d.ts.map