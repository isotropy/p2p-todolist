import server from "./db";

export enum Priority {
  High,
  Medium,
  Low
}

export interface Task {
  name: string,
  assignedTo: string,
  priority: Priority,
  dueDate: string 
}

export async function add(task: Task) {
  const db = await server.open();
  await db.insert(t => t.todos, task);
  await db.close();
}

