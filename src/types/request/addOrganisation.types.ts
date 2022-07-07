import { Board } from "./action.types";

interface Organisation {
  id: string;
  name: string;
}

export interface AddOrganisationData {
  bord: Board;
  organisation: Organisation;
}
