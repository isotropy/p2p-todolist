import { db, table, DbServer } from "isotropy-db";
import { Priority } from "./todos";

export default db({
  accounts: table([
    {
      __id: "1",
      username: "jeswin",
      hash: "8981948d97a82c9a85df2101a5aafb74"
    }
  ]),
  todos: table([{
    __id: "1",
    name: "Get the transpiler working",
    assignedTo: "jeswin",
    priority: Priority.Medium,
    dueDate: "2018-12-01"
  }])
});
