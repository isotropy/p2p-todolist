/// <reference types="lazy-linq-with-types" />
import { DbServer } from "isotropy-db";
import { Priority } from "./todos";
declare const _default: DbServer<{
    accounts: IEnumerable<{
        __id: string;
        username: string;
        hash: string;
    }>;
    todos: IEnumerable<{
        __id: string;
        name: string;
        assignedTo: string;
        priority: Priority;
        dueDate: string;
    }>;
}>;
export default _default;
