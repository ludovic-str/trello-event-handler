import { Board, MemberCreator } from "../request/action.types";
import { AddToBoardAction } from "./action/addBoard.types";
import { CreateCardAction } from "./action/createCard.types";
import { ChangeListAction } from "./action/changeList.types";
import { ChangeCardNameInfo } from "./action/changeName.types";
import { ChangeDescriptionInfo } from "./action/changeDescription.types";
import { CloseCardInfo } from "./action/closeCard.types";
export interface ActionInfos {
    id: string;
    date: string;
    board: Board;
    idMemberCreator: string;
}
export interface TrelloAction {
    user: MemberCreator;
    infos: ActionInfos;
    action: AddToBoardAction | CreateCardAction | ChangeListAction | ChangeCardNameInfo | ChangeDescriptionInfo | CloseCardInfo;
}
//# sourceMappingURL=formated.types.d.ts.map