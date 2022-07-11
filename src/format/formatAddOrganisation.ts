import { TrelloAction } from "../types/formatedType/formated.types";
import { RawActionData } from "../types/request/action.types";
import getActionInfo from "./utils";

const formatAddToOrganisation = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "addToBoard",
      boardInfo: rawAction.data.board,
      organisation: rawAction.data.organisation || { name: "", id: "" },
    },
  };
};

export default formatAddToOrganisation;
