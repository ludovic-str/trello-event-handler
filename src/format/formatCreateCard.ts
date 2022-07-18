import { TrelloAction } from "../types/formatedType/formated.types";
import { RawActionData } from "../types/request/action.types";
import getActionInfo from "./utils";

const formatCreateCard = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "createCard",
      card: {
        id: rawAction.data.card.id,
        name: rawAction.data.card.name,
      },
      list: {
        id: rawAction.data.list.id,
        name: rawAction.data.list.name,
      },
    },
  };
};

export default formatCreateCard;
