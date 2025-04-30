export interface Message {
    id: string;
    senderId: string;
    receiverId: string;
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
export declare enum ConversationStatus {
    ACTIVE = "active",
    ARCHIVED = "archived",
    CLOSED = "closed"
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
