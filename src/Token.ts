import { ApiResponse, PaginatedResponse, PaginationParams } from "./common.js";

// Token transaction types
export type TransactionType =
  | "purchase"
  | "usage"
  | "refund"
  | "initial"
  | "sale"
  | "block"
  | "unblock"
  | "income";

// Token transaction interface
export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  agentId?: string;
  agentType?: string;
  translationKey?: string; // Translation key for localization
  createdAt: Date;
  paymentId?: string;
  paymentMethod?: string;
  status: "pending" | "completed" | "failed";
  price?: number; // Amount paid in the specified currency
  currency?: string; // Currency used for the payment (e.g., 'USD', 'EUR')
  balanceAfter?: number; // Balance after transaction
}

// Purchase tokens request
export interface PurchaseTokensRequest {
  amount: number;
  paymentMethod: string;
  paymentDetails?: any;
}

// Purchase tokens response
export interface PurchaseTokensResponse
  extends ApiResponse<{
    transaction: TokenTransaction;
    newBalance: number;
  }> {}

// Sell tokens request
export interface SellTokensRequest {
  amount: number;
  paymentMethod: string;
  accountDetails: any;
}

// Sell tokens response
export interface SellTokensResponse
  extends ApiResponse<{
    transaction: TokenTransaction;
    newBalance: number;
  }> {}

// Token transactions list request
export interface TokenTransactionsRequest extends PaginationParams {
  userId?: string;
  type?: TransactionType;
  startDate?: Date;
  endDate?: Date;
}

// Token transactions list response
export interface TokenTransactionsResponse
  extends PaginatedResponse<TokenTransaction> {}

// Token balance response
export interface TokenBalanceResponse
  extends ApiResponse<{
    balance: number;
    blockedBalance: number;
    availableBalance: number;
  }> {}

// Token pricing interface
export interface TokenPricing {
  id: string;
  tokensAmount: number;
  price: number; // in USD or other currency
  currency: string;
  discount?: number; // percentage discount
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Token pricing response
export interface TokenPricingResponse extends ApiResponse<TokenPricing[]> {}
