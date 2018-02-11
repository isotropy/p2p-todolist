export declare enum Priority {
    High = 0,
    Medium = 1,
    Low = 2,
}
export interface Task {
    name: string;
    assignedTo: string;
    priority: Priority;
    dueDate: string;
}
export declare function add(task: Task): Promise<void>;
