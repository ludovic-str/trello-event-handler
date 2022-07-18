import { Board, List, Organisation } from "./genericAction.types";

interface ChangeListCardInfo {
  id: string;
  name: string;
}

export interface ChangeListAction {
  type: "changeList";
  card: ChangeListCardInfo;
  listBefore: List;
  newList: List;
}
