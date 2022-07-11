"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const formatCreateCard = (rawAction) => {
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "createCard",
            card: {
                id: rawAction.data.card.id,
                name: rawAction.data.card.name,
            },
            board: {
                id: rawAction.data.board.id,
                name: rawAction.data.board.name,
                shortLink: rawAction.data.board.shortLink,
            },
            list: {
                id: rawAction.data.list.id,
                name: rawAction.data.list.name,
            },
        },
    };
};
exports.default = formatCreateCard;
//# sourceMappingURL=formatCreateCard.js.map