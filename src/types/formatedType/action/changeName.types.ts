import { Board, Card, List } from "./genericAction.types";

export interface ChangeCardNameInfo {
  type: "changeName";
  card: Card;
  list: List;
  oldName: string;
}
