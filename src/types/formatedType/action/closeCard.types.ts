import { Board, Card, List } from "./genericAction.types";

export interface CloseCardInfo {
  type: "closedCard";
  board: Board;
  card: Card;
  list: List;
}
