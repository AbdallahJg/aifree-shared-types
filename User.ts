export type IdentityType = "admin" | "client" | "freelancer" | "agent";

export type IUser = {
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
  companySize?: string;
  companyLogo?: string; // URL to the company logo

  // AI Agent specific
  website?: string;
  freelancerId?: string;
};
