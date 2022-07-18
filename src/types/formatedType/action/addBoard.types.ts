import { Board, List, Organisation } from "./genericAction.types";

export interface AddToBoardAction {
  type: "addToBoard";
  organisation: Organisation;
}
