"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const formatChangeList = (rawAction) => {
    var _a, _b, _c, _d;
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "changeList",
            card: {
                id: rawAction.data.card.id,
                name: rawAction.data.card.name,
            },
            listBefore: {
                id: ((_a = rawAction.data.listBefore) === null || _a === void 0 ? void 0 : _a.id) || "",
                name: ((_b = rawAction.data.listBefore) === null || _b === void 0 ? void 0 : _b.name) || "",
            },
            newList: {
                id: ((_c = rawAction.data.listAfter) === null || _c === void 0 ? void 0 : _c.id) || "",
                name: ((_d = rawAction.data.listAfter) === null || _d === void 0 ? void 0 : _d.name) || "",
            },
        },
    };
};
const formatChangeName = (rawAction) => {
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "changeName",
            list: rawAction.data.list,
            oldName: rawAction.data.old.name || "",
            card: {
                id: rawAction.data.card.id,
                name: rawAction.data.card.name,
            },
        },
    };
};
const formatChangeDescription = (rawAction) => {
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "changeDescription",
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
const formatChangeClosed = (rawAction) => {
    return {
        user: rawAction.memberCreator,
        infos: (0, utils_1.default)(rawAction),
        action: {
            type: "closedCard",
            list: rawAction.data.list,
            card: {
                id: rawAction.data.card.id,
                name: rawAction.data.card.name,
            },
        },
    };
};
const formatUpdateCard = (rawAction) => {
    if (rawAction.data.listAfter !== undefined)
        return formatChangeList(rawAction);
    if (rawAction.data.old.name !== undefined)
        return formatChangeName(rawAction);
    if (rawAction.data.old.desc !== undefined)
        return formatChangeDescription(rawAction);
    if (rawAction.data.old.closed !== undefined)
        return formatChangeClosed(rawAction);
    return null;
};
exports.default = formatUpdateCard;
//# sourceMappingURL=formatUpdateCard.js.map