"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const formatAddMemberToCard = (rawAction) => {
    var _a, _b;
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "addMemberToCard",
            card: {
                id: rawAction.data.card.id,
                name: rawAction.data.card.name,
            },
            member: {
                id: ((_a = rawAction.data.member) === null || _a === void 0 ? void 0 : _a.id) || "",
                name: ((_b = rawAction.data.member) === null || _b === void 0 ? void 0 : _b.name) || "",
            },
        },
    };
};
exports.default = formatAddMemberToCard;
//# sourceMappingURL=formatAddMemberToCard.js.map