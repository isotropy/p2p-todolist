"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
var Priority;
(function (Priority) {
    Priority[Priority["High"] = 0] = "High";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["Low"] = 2] = "Low";
})(Priority = exports.Priority || (exports.Priority = {}));
function add(task) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield db_1.default.open();
        db.insert(t => t.todos, task);
    });
}
exports.add = add;
//# sourceMappingURL=todos.js.map