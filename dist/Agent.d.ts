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
export interface CustomAgent {
    id?: string;
    name: string;
    description: string;
    photo: string;
    apiEndpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    authType: "none" | "apiKey" | "bearerToken" | "basic";
    authCredentials: Record<string, string>;
    inputFormat: string;
    outputFormat: string;
    webhookUrl?: string;
    tokenPricePerCall: number;
    freeTrialCalls: number;
    categoryId: string;
    tags: string[];
    maxInputLength: number;
    responseTimeout: number;
    sampleInput: string;
    sampleOutput: string;
    ownerName: string;
    ownerEmail: string;
    documentationUrl: string;
    isPublic: boolean;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface AgentCategory {
    id?: string;
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
