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
      board: {
        id: rawAction.data.board.id,
        name: rawAction.data.board.name,
        shortLink: rawAction.data.board.shortLink,
      },
      list: {
        id: rawAction.data.list.id,
        name: rawAction.data.list.name,
      },
    },
  };
};

export default formatCreateCard;
