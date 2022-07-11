import { CardData } from "./update.types";
export interface Board {
    id: string;
    name: string;
    shortLink: string;
}
export interface MemberCreator {
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
export interface RawActionData {
    id: string;
    idMemberCreator: string;
    data: CardData;
    appCreator: string | null;
    type: string;
    date: string;
    limits: string | null;
    memberCreator: MemberCreator;
}
//# sourceMappingURL=action.types.d.ts.map