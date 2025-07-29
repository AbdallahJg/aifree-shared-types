import { ApiResponse } from "./common.js";

// SAAS Solution categories
export interface SaasSolutionCategory {
  _id?: string;
  name: string;
  description: string;
  isDefault: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// SAAS Solution interface
export interface SaasSolution {
  _id?: string;
  name: string;
  description: string;
  logo?: string;
  website: string;
  pricingModel:
    | "free"
    | "freemium"
    | "subscription"
    | "one-time"
    | "usage-based";
  pricingDetails: string;
  categoryId: string;
  category?: SaasSolutionCategory;
  supportEmail: string;
  features?: string[];
  tags?: string[];
  userId: string;
  ownerName: string;
  ownerEmail: string;
  isPublic: boolean;
  isVerified: boolean;
  isPaid: boolean;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// SAAS Solution responses
export interface SaasSolutionResponse extends ApiResponse<SaasSolution> {}
export interface SaasSolutionsResponse extends ApiResponse<SaasSolution[]> {}
export interface SaasSolutionCategoryResponse
  extends ApiResponse<SaasSolutionCategory> {}
export interface SaasSolutionCategoriesResponse
  extends ApiResponse<SaasSolutionCategory[]> {}

// SAAS Solution filters for search
export interface SaasSolutionFilters {
  searchTerm?: string;
  categoryId?: string;
  pricingModel?: string[];
  tags?: string[];
  isVerified?: boolean;
  featured?: boolean;
  sortBy?: string;
  page?: number;
  limit?: number;
}
