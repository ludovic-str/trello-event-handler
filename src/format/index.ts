import { RawActionData } from "../types/request/action.types";
import { TrelloAction } from "../types/formatedType/formated.types";
import formatAddToOrganisation from "./formatAddOrganisation";
import formatCreateCard from "./formatCreateCard";
import formatUpdateCard from "./formatUpdateCard";
import formatAddMemberToCard from "./formatAddMemberToCard";

const formatAction = (rawAction: RawActionData): TrelloAction | null => {
  if (
    rawAction.type !== "addToOrganizationBoard" &&
    rawAction.type !== "createCard" &&
    rawAction.type !== "updateCard" &&
    rawAction.type !== "addMemberToCard"
  )
    return null;
  if (rawAction.type === "addMemberToCard")
    return formatAddMemberToCard(rawAction);
  if (rawAction.type === "addToOrganizationBoard")
    return formatAddToOrganisation(rawAction);
  if (rawAction.type === "createCard") return formatCreateCard(rawAction);
  if (rawAction.type === "updateCard") return formatUpdateCard(rawAction);
  return null;
};

export default formatAction;
