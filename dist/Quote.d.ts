export declare enum QuoteType {
    TASK_BASED = "task_based",
    TIME_BASED = "time_based"
}
export interface IComplianceInfo {
    _id?: string;
    freelancerId: string;
    businessName: string;
    taxIdentificationNumber: string;
    registrationNumber?: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    bankAccountName?: string;
    bankAccountNumber?: string;
    bankRoutingNumber?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IQuote {
    _id?: string;
    projectId: string;
    freelancerId: string;
    clientId: string;
    conversationId?: string;
    title: string;
    description: string;
    quoteType: QuoteType;
    amount: number;
    hourlyRate?: number;
    estimatedHours?: number;
    duration: number;
    complianceInfoId: string;
    status: QuoteStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare enum QuoteStatus {
    DRAFT = "draft",
    SENT = "sent",
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    CANCELLED = "cancelled"
}
