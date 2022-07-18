import { List } from "./genericAction.types";
interface CreatedCardInfo {
    id: string;
    name: string;
}
export interface CreateCardAction {
    type: "createCard";
    list: List;
    card: CreatedCardInfo;
}
export {};
//# sourceMappingURL=createCard.types.d.ts.map