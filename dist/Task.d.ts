export interface TaskConversationMessage {
    role: "user" | "assistant" | "model";
    content: string;
    timestamp: string;
}
export interface TaskMetadata {
    [key: string]: any;
}
export interface ITask {
    _id: string;
    userId: string;
    agentType: string;
    title: string;
    conversation: TaskConversationMessage[];
    metadata?: TaskMetadata;
    status: "pending" | "completed" | "failed";
    createdAt: Date;
    updatedAt: Date;
}
export interface TaskHistoryResponse {
    id: string;
    userId: string;
    agentType: string;
    conversation: TaskConversationMessage[];
    metadata: TaskMetadata;
    status: "pending" | "completed" | "failed";
    createdAt: Date;
    updatedAt: Date;
}
export interface TaskResponse {
    taskId: string;
    response: string;
    status: "pending" | "completed" | "failed";
}
