import { TrelloAction } from "../types/formatedType/formated.types";
import { RawActionData } from "../types/request/action.types";
import getActionInfo from "./utils";

const formatAddMemberToCard = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "addMemberToCard",
      card: {
        id: rawAction.data.card.id,
        name: rawAction.data.card.name,
      },
      member: {
        id: rawAction.data.member?.id || "",
        name: rawAction.data.member?.name || "",
      },
    },
  };
};

export default formatAddMemberToCard;
