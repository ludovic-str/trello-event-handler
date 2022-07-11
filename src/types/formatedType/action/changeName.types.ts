import { Board, Card, List } from "./genericAction.types";

export interface ChangeCardNameInfo {
  type: "changeName";
  board: Board;
  card: Card;
  list: List;
  oldName: string;
}
