// Base agent configuration interface
export interface AgentConfig {
  name: string;
  description: string;
  capabilities: string[];
  systemPrompt: string;
  maxTokens: number;
  temperature: number;
  tokensPerCall: number; // Number of tokens required per agent call
}

// Base agent response interface
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

// Chat message interface
export interface ChatMessage {
  role: "user" | "assistant" | "model";
  content: string;
  timestamp: string;
}

// Custom agent interface
export interface CustomAgent {
  _id?: string;
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
  category?: AgentCategory; // Populated category object
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
  creator?: {
    username: string;
    _id: string;
    email?: string;
  };
  promptPlaceholder?: string;
  parameters?: AgentParameter[];
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

// Agent category interface
export interface AgentCategory {
  _id?: string;
  name: string;
  description: string;
  isDefault: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Custom agent request interface
export interface CustomAgentRequest {
  prompt: string;
  metadata?: Record<string, any>;
  taskId?: string;
}

// Custom agent response interface
export interface CustomAgentResponse extends AgentResponse {
  metadata?: Record<string, any>;
}

// Agent-specific request interfaces
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

// Agent-specific response interfaces
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

// Agent parameter interface for custom agent configuration
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
