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
export interface ContentWritingMetadata extends TaskMetadata {
    type?: string;
    targetAudience?: string;
    tone?: string;
    keywords?: string[];
    wordCount?: number;
    language?: string;
}
export interface ContentTypeOption {
    label: string;
    value: string;
    translationKey: string;
}
export interface ToneOption {
    label: string;
    value: string;
    translationKey: string;
}
export interface TranslationMetadata extends TaskMetadata {
    sourceLanguage: string;
    targetLanguage: string;
    formality: "formal" | "informal" | "neutral";
    preserveFormatting: boolean;
}
export interface TaskResponse {
    taskId: string;
    response: string;
    status: "pending" | "completed" | "failed";
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
