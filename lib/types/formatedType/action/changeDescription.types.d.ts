import { Board, Card, List } from "./genericAction.types";
export interface ChangeDescriptionInfo {
    type: "changeDescription";
    board: Board;
    card: Card;
    list: List;
    oldDescription: string;
    newDescription: string;
}
//# sourceMappingURL=changeDescription.types.d.ts.map