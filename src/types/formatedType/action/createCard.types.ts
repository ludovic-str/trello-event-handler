import { Board, List } from "./genericAction.types";

interface CreatedCardInfo {
  id: string;
  name: string;
}

export interface CreateCardAction {
  type: "createCard";
  board: Board;
  list: List;
  card: CreatedCardInfo;
}
