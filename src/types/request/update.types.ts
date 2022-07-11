import { Board } from "./action.types";

interface Card {
  closed: boolean | undefined;
  idList: string | undefined;
  id: string;
  name: string;
  idShort: string;
  shortLink: string;
  desc: string | undefined;
}

interface Old {
  idList: string | undefined;
  closed: boolean | undefined;
  desc: string | undefined;
  name: string | undefined;
}

interface List {
  id: string;
  name: string;
}

interface Organisation {
  id: string;
  name: string;
}

export interface CardData {
  card: Card;
  board: Board;
  list: List;
  old: Old;
  listBefore: List | undefined;
  listAfter: List | undefined;
  organisation: Organisation | undefined;
}
