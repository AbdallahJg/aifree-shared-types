import { ApiResponse, PaginatedResponse, PaginationParams } from "./common.js";
export type TransactionType = "purchase" | "usage" | "refund" | "initial" | "sale" | "block" | "unblock" | "income";
export interface TokenTransaction {
    id: string;
    userId: string;
    amount: number;
    type: TransactionType;
    description: string;
    agentId?: string;
    agentType?: string;
    translationKey?: string;
    createdAt: Date;
    paymentId?: string;
    paymentMethod?: string;
    status: "pending" | "completed" | "failed";
    price?: number;
    balanceAfter?: number;
}
export interface PurchaseTokensRequest {
    amount: number;
    paymentMethod: string;
    paymentDetails?: any;
}
export interface PurchaseTokensResponse extends ApiResponse<{
    transaction: TokenTransaction;
    newBalance: number;
}> {
}
export interface SellTokensRequest {
    amount: number;
    paymentMethod: string;
    accountDetails: any;
}
export interface SellTokensResponse extends ApiResponse<{
    transaction: TokenTransaction;
    newBalance: number;
}> {
}
export interface TokenTransactionsRequest extends PaginationParams {
    userId?: string;
    type?: TransactionType;
    startDate?: Date;
    endDate?: Date;
}
export interface TokenTransactionsResponse extends PaginatedResponse<TokenTransaction> {
}
export interface TokenBalanceResponse extends ApiResponse<{
    balance: number;
    blockedBalance: number;
    availableBalance: number;
}> {
}
export interface TokenPricing {
    id: string;
    tokensAmount: number;
    price: number;
    currency: string;
    discount?: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface TokenPricingResponse extends ApiResponse<TokenPricing[]> {
}
