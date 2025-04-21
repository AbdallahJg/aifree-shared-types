import { IProject } from "./Project";

export interface Message {
  id: string;
  senderId: string; // User ID of sender
  receiverId: string; // User ID of receiver
  content: string;
  timestamp: Date;
  isRead: boolean;
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
