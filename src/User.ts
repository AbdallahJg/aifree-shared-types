import { IdentityType, ApiResponse } from "./common";

export interface IUser {
  id: string;
  email: string;
  name?: string;
  type: IdentityType;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse extends ApiResponse<IUser> {}

export interface UserProfile extends IUser {
  companyName?: string;
  companySize?: string;
  website?: string;
}
