// User identity types

import { IdentityType, ApiError, ValidationError } from "./common";

// Base authentication interfaces
export interface AuthResponse {
  user: {
    id: string;
    email: string;
    type: IdentityType;
    name?: string;
  };
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// Signup request interfaces
export interface BaseSignupRequest {
  email: string;
  password: string;
  name?: string;
  type: IdentityType;
}

export interface ClientSignupRequest extends BaseSignupRequest {
  type: "client";
  companyName: string;
  companySize: string;
}

export interface FreelancerSignupRequest extends BaseSignupRequest {
  type: "freelancer";
  surname: string;
  experience: string;
  headline: string;
  category: string;
  skills: string[];
  links?: { title: string; url: string }[];
  note?: string;
  recommendations?: string[];
}

export interface AgentSignupRequest extends BaseSignupRequest {
  type: "agent";
  website?: string;
}

export type SignupRequest =
  | ClientSignupRequest
  | FreelancerSignupRequest
  | AgentSignupRequest;

// Session interfaces
export interface SessionUser {
  id: string;
  email: string;
  type: IdentityType;
}

export interface Session {
  user?: SessionUser;
}

// Token interfaces
export interface TokenPayload {
  id: string;
  email: string;
  type: IdentityType;
}

// Error interfaces
export interface AuthError extends ApiError {
  code:
    | "USER_EXISTS"
    | "VALIDATION_ERROR"
    | "SERVER_ERROR"
    | "INVALID_CREDENTIALS";
  errors?: ValidationError[];
}
