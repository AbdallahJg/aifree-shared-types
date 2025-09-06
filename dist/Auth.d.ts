import { IdentityType, ApiError, ValidationError } from "./common.js";
import { Freelancer } from "./Freelancer.js";
export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name?: string;
        type: IdentityType;
        email: string;
        balance: number;
        companyName?: string;
        freelancerId?: string;
    };
    freelancer?: Partial<Freelancer>;
}
export interface AuthRequest {
    email: string;
    password: string;
}
export interface BaseSignupRequest {
    email: string;
    password: string;
    name?: string;
    type: IdentityType;
    imageUrl?: string;
}
export interface ClientSignupRequest extends BaseSignupRequest {
    type: "client";
    companyName?: string;
    companySize?: string;
    companyLogo?: string;
}
export interface FreelancerSignupRequest extends BaseSignupRequest {
    type: "freelancer";
    surname?: string;
    experience?: string;
    headline?: string;
    category?: string;
    skills?: string[];
    links?: {
        title: string;
        url: string;
    }[];
    note?: string;
    recommendations?: string[];
    photo?: string;
    website?: string;
    availability?: {
        status: "available" | "partially_available" | "unavailable";
        availableHours?: number;
        nextAvailableDate?: Date;
    };
    legalDocuments?: {
        id: string;
        type: string;
        verified: boolean;
        uploadDate: Date;
        expiryDate?: Date;
    }[];
    complianceStatus?: "pending" | "verified" | "rejected";
    experiences?: {
        title: string;
        company: string;
        description: string;
        startDate: Date;
        endDate?: Date;
        current: boolean;
    }[];
}
export interface AgentSignupRequest extends BaseSignupRequest {
    type: "agent";
    description: string;
    photo?: string;
    categoryId: string;
    tags: string[];
    partners: string[];
    ownerName: string;
    ownerEmail: string;
    documentationUrl: string;
    link: string;
    socialMediaLinks?: {
        github?: string;
        x?: string;
        youtube?: string;
        linkedin?: string;
        website?: string;
    };
    isPublic: boolean;
}
export interface AdminSignupRequest extends BaseSignupRequest {
    type: "admin";
}
export interface SaasProviderSignupRequest extends BaseSignupRequest {
    type: "saas";
    website: string;
    description: string;
    logo?: string;
    pricingModel: string;
    pricingDetails: string;
    categoryId: string;
    supportEmail: string;
    ownerName?: string;
}
export type SignupRequest = ClientSignupRequest | FreelancerSignupRequest | AgentSignupRequest | AdminSignupRequest | SaasProviderSignupRequest;
export interface SessionUser {
    id: string;
    email: string;
    type: IdentityType;
}
export interface Session {
    user?: SessionUser;
}
export interface TokenPayload {
    id: string;
    email: string;
    type: IdentityType;
}
export interface AuthError extends ApiError {
    code: "USER_EXISTS" | "VALIDATION_ERROR" | "SERVER_ERROR" | "INVALID_CREDENTIALS";
    errors?: ValidationError[];
}
