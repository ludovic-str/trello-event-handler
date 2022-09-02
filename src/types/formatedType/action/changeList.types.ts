import { Card, List } from "./genericAction.types";

export interface ChangeListAction {
  type: "changeList";
  card: Card;
  listBefore: List;
  newList: List;
}
