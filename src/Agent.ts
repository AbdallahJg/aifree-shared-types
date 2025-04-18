// Base agent configuration interface
export interface AgentConfig {
  name: string;
  description: string;
  capabilities: string[];
  systemPrompt: string;
  maxTokens: number;
  temperature: number;
}

// Common agent response interfaces
export interface AgentResponse {
  taskId: string;
  response: string;
  status: "pending" | "completed" | "failed";
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
