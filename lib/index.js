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
var _TrelloEventHandler_lastUpdate, _TrelloEventHandler_e, _TrelloEventHandler_boards;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrelloEventHandler = void 0;
const events_1 = require("events");
const fetchBoardInfo_1 = __importDefault(require("./fetchBoardInfo"));
class TrelloEventHandler {
    constructor(key, token) {
        _TrelloEventHandler_lastUpdate.set(this, void 0);
        _TrelloEventHandler_e.set(this, void 0);
        _TrelloEventHandler_boards.set(this, void 0);
        this.credentials = { key, token };
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
    addBoardFromUrl(url) {
        const boardId = url.split("/")[4];
        __classPrivateFieldGet(this, _TrelloEventHandler_boards, "f").push(boardId);
        console.log(__classPrivateFieldGet(this, _TrelloEventHandler_boards, "f"));
    }
    addBoardFromId(id) {
        __classPrivateFieldGet(this, _TrelloEventHandler_boards, "f").push(id);
    }
    getBoardActivity(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, fetchBoardInfo_1.default)(this.credentials, boardId);
            if (data === null)
                return;
            for (let action of data) {
                if (new Date(action.date).getTime() > __classPrivateFieldGet(this, _TrelloEventHandler_lastUpdate, "f")) {
                    __classPrivateFieldGet(this, _TrelloEventHandler_e, "f").emit(action.type, action);
                }
            }
            __classPrivateFieldSet(this, _TrelloEventHandler_lastUpdate, Date.now(), "f");
            console.log("test");
        });
    }
    poll(ref) {
        __classPrivateFieldGet(ref, _TrelloEventHandler_boards, "f").forEach((id) => ref.getBoardActivity(id));
    }
}
exports.TrelloEventHandler = TrelloEventHandler;
_TrelloEventHandler_lastUpdate = new WeakMap(), _TrelloEventHandler_e = new WeakMap(), _TrelloEventHandler_boards = new WeakMap();
//# sourceMappingURL=index.js.map