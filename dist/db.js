"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isotropy_db_1 = require("isotropy-db");
const todos_1 = require("./todos");
exports.default = isotropy_db_1.db({
    accounts: isotropy_db_1.table([
        {
            __id: "1",
            username: "jeswin",
            hash: "8981948d97a82c9a85df2101a5aafb74"
        }
    ]),
    todos: isotropy_db_1.table([{
            __id: "1",
            name: "Get the transpiler working",
            assignedTo: "jeswin",
            priority: todos_1.Priority.Medium,
            dueDate: "2018-12-01"
        }])
});
//# sourceMappingURL=db.js.map