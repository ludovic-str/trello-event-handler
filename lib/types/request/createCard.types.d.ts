import { Board } from "./action.types";
interface List {
    id: string;
    name: string;
}
interface CreateCard {
    id: string;
    name: string;
    idShort: number;
    shortLink: string;
}
export interface CreateCardData {
    board: Board;
    list: List;
    card: CreateCard;
}
export {};
//# sourceMappingURL=createCard.types.d.ts.map