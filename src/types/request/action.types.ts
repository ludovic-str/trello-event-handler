import { UpdateData } from "./update.types";
import { AddOrganisationData } from "./addOrganisation.types";
import { CreateCardData } from "./createCard.types";

export interface Board {
  id: string;
  name: string;
  shortLink: string;
}

interface MemberCreator {
  id: string;
  activityBlocked: boolean;
  avatarHash: string;
  avatarUrl: string;
  fullName: string;
  idMemberReferrer: string | null;
  initials: string;
  nonPublic: null;
  nonPublicAvailable: boolean;
  username: string;
}

export interface ActionData {
  id: string;
  idMemberCreator: string;
  data: UpdateData | AddOrganisationData | CreateCardData;
  appCreator: string | null;
  type: string;
  date: string;
  limits: string | null;
  memberCreator: MemberCreator;
}
