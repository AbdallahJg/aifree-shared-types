import { IdentityType, ApiResponse } from "./common.js";

export type IUser = {
  id: string;
  email: string;
  type: IdentityType;
  name?: string;
  balance: number;
  blockedBalance: number; // Tokens blocked for active projects
  imageUrl?: string;
  currency?: string; // User's preferred currency (e.g., 'USD', 'EUR', 'GBP')
  locale?: string; // User's locale (e.g., 'en-US', 'fr-FR')
  createdAt: Date;
  updatedAt: Date;
  photo?: string;
  freelancerId?: string;
  // Ban fields
  banned?: boolean;
  banReason?: string;
  bannedAt?: Date;
};

export interface UserResponse extends ApiResponse<IUser> {}

export interface UserProfile extends IUser {
  companyName?: string;
  companySize?: string;
  companyLogo?: string;
  name?: string;
  surname?: string;
  experience?: string;
  headline?: string;
  category?: string;
  skills?: string[];
  links?: { title: string; url: string }[];
  note?: string;
  recommendations?: string[];
  website?: string;
  photoUrl?: string;
}
