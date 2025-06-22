import { IProject } from "./Project";

export interface Message {
  id: string;
  senderId: string | null; // User ID of sender, null for system messages
  receiverId: string | null; // User ID of receiver, null for system messages
  content: string;
  timestamp: Date;
  isRead: boolean;
  metadata?: Record<string, any>; // Optional metadata for system messages
  attachments?: {
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
    url: string;
    uploadedAt: Date;
  }[];
}

export enum ConversationStatus {
  ACTIVE = "active",
  ARCHIVED = "archived",
  CLOSED = "closed",
}

export interface IConversation {
  _id: string;
  startDate: Date;
  clientId: string;
  freelancerId: string;
  projectId: string;
  taskId?: string;
  messages: Message[];
  status: ConversationStatus;
  lastMessageTimestamp?: Date;
  isClientTyping?: boolean;
  isFreelancerTyping?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
