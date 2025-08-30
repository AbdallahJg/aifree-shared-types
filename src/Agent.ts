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

// Input type options for custom agents
export type AgentInputType = 
  | "text" 
  | "json" 
  | "form-data" 
  | "query-params" 
  | "file-upload" 
  | "multipart" 
  | "xml" 
  | "csv";

// Output schema configuration for parsing and displaying agent responses
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
  customTemplate?: string; // For custom display formatting
  errorHandling?: {
    fallbackMessage?: string;
    showRawResponse?: boolean;
  };
}

// Custom agent interface
export interface CustomAgent {
  _id?: string;
  name: string;
  description: string;
  photo: string;
  categoryId: string;
  category?: AgentCategory; // Populated category object
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
