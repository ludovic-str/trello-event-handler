import { TrelloAction } from "../types/formatedType/formated.types";
import { RawActionData } from "../types/request/action.types";
import getActionInfo from "./utils";

const formatChangeList = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "changeList",
      boardInfo: rawAction.data.board,
      card: {
        id: rawAction.data.card.id,
        name: rawAction.data.card.name,
      },
      listBefore: {
        id: rawAction.data.listBefore?.id || "",
        name: rawAction.data.listBefore?.name || "",
      },
      newList: {
        id: rawAction.data.listAfter?.id || "",
        name: rawAction.data.listAfter?.name || "",
      },
    },
  };
};

const formatChangeName = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "changeName",
      board: rawAction.data.board,
      list: rawAction.data.list,
      oldName: rawAction.data.old.name || "",
      card: {
        id: rawAction.data.card.id,
        name: rawAction.data.card.name,
      },
    },
  };
};

const formatChangeDescription = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "changeDescription",
      board: rawAction.data.board,
      list: rawAction.data.list,
      card: {
        id: rawAction.data.card.id,
        name: rawAction.data.card.name,
      },
      oldDescription: rawAction.data.old.desc || "",
      newDescription: rawAction.data.card.desc || "",
    },
  };
};

const formatChangeClosed = (rawAction: RawActionData): TrelloAction => {
  return {
    user: rawAction.memberCreator,
    infos: getActionInfo(rawAction),
    action: {
      type: "closedCard",
      board: rawAction.data.board,
      list: rawAction.data.list,
      card: {
        id: rawAction.data.card.id,
        name: rawAction.data.card.name,
      },
    },
  };
};

const formatUpdateCard = (rawAction: RawActionData): TrelloAction | null => {
  if (rawAction.data.listAfter !== undefined)
    return formatChangeList(rawAction);
  if (rawAction.data.old.name !== undefined) return formatChangeName(rawAction);
  if (rawAction.data.old.desc !== undefined)
    return formatChangeDescription(rawAction);
  if (rawAction.data.old.closed !== undefined)
    return formatChangeClosed(rawAction);
  return null;
};

export default formatUpdateCard;
