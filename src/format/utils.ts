import { ActionInfos } from "../types/formatedType/formated.types";
import { RawActionData } from "../types/request/action.types";

const getActionInfo = (rawAction: RawActionData): ActionInfos => {
  return {
    id: rawAction.id,
    date: rawAction.date,
    idMemberCreator: rawAction.idMemberCreator,
  };
};

export default getActionInfo;
