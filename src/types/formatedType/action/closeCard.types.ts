import { Board, Card, List } from "./genericAction.types";

export interface CloseCardInfo {
  type: "closedCard";
  card: Card;
  list: List;
}
