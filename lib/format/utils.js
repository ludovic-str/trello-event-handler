"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getActionInfo = (rawAction) => {
    return {
        id: rawAction.id,
        date: rawAction.date,
        idMemberCreator: rawAction.idMemberCreator,
    };
};
exports.default = getActionInfo;
//# sourceMappingURL=utils.js.map