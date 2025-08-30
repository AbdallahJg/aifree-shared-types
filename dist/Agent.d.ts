export interface AgentConfig {
    name: string;
    description: string;
    capabilities: string[];
    systemPrompt: string;
    maxTokens: number;
    temperature: number;
    tokensPerCall: number;
}
export interface AgentResponse {
    taskId: string;
    response: string;
    status: "pending" | "completed" | "failed";
    title: string;
}
export interface DeleteTaskResponse {
    success: boolean;
    taskId: string;
    message: string;
}
export interface ChatMessage {
    role: "user" | "assistant" | "model";
    content: string;
    timestamp: string;
}
export type AgentInputType = "text" | "json" | "form-data" | "query-params" | "file-upload" | "multipart" | "xml" | "csv";
export interface AgentOutputSchema {
    type: "json" | "text" | "html" | "markdown" | "xml" | "csv" | "auto";
    displayFormat: "text" | "table" | "card" | "list" | "custom";
    fields?: {
        key: string;
        label: string;
        type: "string" | "number" | "boolean" | "date" | "url" | "image" | "object" | "array";
        displayAs?: "text" | "link" | "image" | "badge" | "progress" | "code" | "json";
        required?: boolean;
    }[];
    customTemplate?: string;
    errorHandling?: {
        fallbackMessage?: string;
        showRawResponse?: boolean;
    };
}
export interface CustomAgent {
    _id?: string;
    name: string;
    description: string;
    photo: string;
    categoryId: string;
    category?: AgentCategory;
    tags: string[];
    sampleInput: string;
    sampleOutput: string;
    ownerName: string;
    ownerEmail: string;
    documentationUrl: string;
    link: string;
    isPublic: boolean;
    userId: string;
    creator?: {
        username: string;
        _id: string;
        email?: string;
    };
    approvalStatus?: "under_supervision" | "approved" | "declined";
    approvalNotes?: string;
    approvedAt?: Date;
    approvedBy?: {
        _id: string;
        username?: string;
        email?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}
export interface AgentCategory {
    _id?: string;
    name: string;
    description: string;
    isDefault: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CustomAgentRequest {
    prompt: string;
    metadata?: Record<string, any>;
    taskId?: string;
}
export interface CustomAgentResponse extends AgentResponse {
    metadata?: Record<string, any>;
}
export interface ContentWritingRequest {
    prompt: string;
    metadata?: {
        type?: string;
        targetAudience?: string;
        tone?: string;
        keywords?: string[];
        wordCount?: number;
        language?: string;
    };
    taskId?: string;
}
export interface TranslationRequest {
    text: string;
    metadata: {
        sourceLanguage?: string;
        targetLanguage?: string;
        formality?: "formal" | "informal" | "neutral";
        preserveFormatting?: boolean;
    };
    taskId?: string;
}
export interface ContentWritingResponse extends AgentResponse {
    metadata?: {
        type?: string;
        targetAudience?: string;
        tone?: string;
        keywords?: string[];
        wordCount?: number;
        language?: string;
    };
}
export interface TranslationResponse extends AgentResponse {
    translatedText: string;
    detectedLanguage?: string;
    metadata: {
        sourceLanguage: string;
        targetLanguage: string;
        formality: "formal" | "informal" | "neutral";
        preserveFormatting: boolean;
    };
}
export interface AgentParameter {
    key: string;
    label: string;
    type: "text" | "select" | "number" | "boolean";
    placeholder?: string;
    defaultValue?: string | number | boolean;
    options?: {
        label: string;
        value: string;
    }[];
    required?: boolean;
}
