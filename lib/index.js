"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _TrelloEventHandler_credentials, _TrelloEventHandler_lastUpdate, _TrelloEventHandler_e, _TrelloEventHandler_boards;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrelloEventHandler = void 0;
const events_1 = require("events");
const fetchBoardInfo_1 = __importDefault(require("./fetchBoardInfo"));
const format_1 = __importDefault(require("./format"));
class TrelloEventHandler {
    constructor(key, token) {
        _TrelloEventHandler_credentials.set(this, void 0);
        _TrelloEventHandler_lastUpdate.set(this, void 0);
        _TrelloEventHandler_e.set(this, void 0);
        _TrelloEventHandler_boards.set(this, void 0);
        __classPrivateFieldSet(this, _TrelloEventHandler_credentials, { key, token }, "f");
        __classPrivateFieldSet(this, _TrelloEventHandler_lastUpdate, Date.now(), "f");
        __classPrivateFieldSet(this, _TrelloEventHandler_boards, [], "f");
        __classPrivateFieldSet(this, _TrelloEventHandler_e, new events_1.EventEmitter(), "f");
    }
    start() {
        const ref = this;
        setInterval(() => {
            this.poll(ref);
        }, 60 * 1000);
    }
    stop() {
        clearInterval();
    }
    on(event, callback) {
        __classPrivateFieldGet(this, _TrelloEventHandler_e, "f").on(event, callback);
    }
    addBoardFromUrl(url, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const boardId = url.split("/")[4];
            const doesBoardExist = yield (0, fetchBoardInfo_1.default)(__classPrivateFieldGet(this, _TrelloEventHandler_credentials, "f"), boardId);
            if (doesBoardExist === null)
                return null;
            __classPrivateFieldGet(this, _TrelloEventHandler_boards, "f").push({ id: boardId, name });
            return boardId;
        });
    }
    addBoardFromId(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const doesBoardExist = yield (0, fetchBoardInfo_1.default)(__classPrivateFieldGet(this, _TrelloEventHandler_credentials, "f"), id);
            if (doesBoardExist === null)
                return null;
            __classPrivateFieldGet(this, _TrelloEventHandler_boards, "f").push({ id, name });
            return id;
        });
    }
    removeBoadByName(name) {
        const boardIndex = __classPrivateFieldGet(this, _TrelloEventHandler_boards, "f").findIndex((item) => item.name === name);
        if (boardIndex === -1)
            return false;
        __classPrivateFieldGet(this, _TrelloEventHandler_boards, "f").splice(boardIndex, 1);
        return true;
    }
    getBoardActivity(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, fetchBoardInfo_1.default)(__classPrivateFieldGet(this, _TrelloEventHandler_credentials, "f"), boardId);
            if (data === null)
                return;
            for (let action of data) {
                if (new Date(action.date).getTime() < __classPrivateFieldGet(this, _TrelloEventHandler_lastUpdate, "f"))
                    break;
                const formatedData = (0, format_1.default)(action);
                if (formatedData !== null)
                    __classPrivateFieldGet(this, _TrelloEventHandler_e, "f").emit(formatedData.action.type, formatedData);
            }
            __classPrivateFieldSet(this, _TrelloEventHandler_lastUpdate, Date.now(), "f");
        });
    }
    poll(ref) {
        __classPrivateFieldGet(ref, _TrelloEventHandler_boards, "f").forEach((board) => ref.getBoardActivity(board.id));
    }
}
exports.TrelloEventHandler = TrelloEventHandler;
_TrelloEventHandler_credentials = new WeakMap(), _TrelloEventHandler_lastUpdate = new WeakMap(), _TrelloEventHandler_e = new WeakMap(), _TrelloEventHandler_boards = new WeakMap();
//# sourceMappingURL=index.js.map