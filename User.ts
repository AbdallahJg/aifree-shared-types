export type IdentityType = "admin" | "client" | "freelancer" | "agent";

export interface IUser {
  email: string;
  name?: string;
  balance: number;
  imageUrl?: string;
  type: IdentityType;

  // Common password methods
  setPassword: (password: string) => void;
  validatePassword: (password: string) => boolean;

  // Client specific
  companyName?: string;

  // Freelancer specific
  surname?: string;
  experience?: string;
  headline?: string;
  category?: string;
  skills?: string[];
  links?: { title: string; url: string }[];
  note?: string;
  recommendations?: string[];

  // AI Agent specific
  website?: string;
}
