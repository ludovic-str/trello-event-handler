"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatAddOrganisation_1 = __importDefault(require("./formatAddOrganisation"));
const formatCreateCard_1 = __importDefault(require("./formatCreateCard"));
const formatUpdateCard_1 = __importDefault(require("./formatUpdateCard"));
const formatAction = (rawAction) => {
    if (rawAction.type !== "addToOrganizationBoard" &&
        rawAction.type !== "createCard" &&
        rawAction.type !== "updateCard")
        return null;
    if (rawAction.type === "addToOrganizationBoard")
        return (0, formatAddOrganisation_1.default)(rawAction);
    if (rawAction.type === "createCard")
        return (0, formatCreateCard_1.default)(rawAction);
    if (rawAction.type === "updateCard")
        return (0, formatUpdateCard_1.default)(rawAction);
    return null;
};
exports.default = formatAction;
//# sourceMappingURL=index.js.map