"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const formatAddToOrganisation = (rawAction) => {
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "addToBoard",
            boardInfo: rawAction.data.board,
            organisation: rawAction.data.organisation || { name: "", id: "" },
        },
    };
};
exports.default = formatAddToOrganisation;
//# sourceMappingURL=formatAddOrganisation.js.map