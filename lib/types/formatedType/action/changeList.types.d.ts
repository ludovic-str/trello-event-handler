import { Board, List } from "./genericAction.types";
interface ChangeListCardInfo {
    id: string;
    name: string;
}
export interface ChangeListAction {
    type: "changeList";
    boardInfo: Board;
    card: ChangeListCardInfo;
    listBefore: List;
    newList: List;
}
export {};
//# sourceMappingURL=changeList.types.d.ts.map