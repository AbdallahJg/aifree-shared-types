import { IdentityType, ApiResponse } from "./common";

export interface IUser {
  id: string;
  email: string;
  type: IdentityType;
  name?: string;
  balance: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse extends ApiResponse<IUser> {}

export interface UserProfile extends IUser {
  companyName?: string;
  companySize?: string;
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
}
