export interface Credentials {
  token: string;
  key: string;
}

export interface BoardListInfo {
  id: string;
  name: string;
}

export type EventType =
  | "createCard"
  | "closedCard"
  | "changeName"
  | "changeList"
  | "changeDescription"
  | "addToBoard";
