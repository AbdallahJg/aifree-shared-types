export type IdentityType = "admin" | "client" | "freelancer" | "agent";
export interface IUser {
    email: string;
    name?: string;
    balance: number;
    imageUrl?: string;
    type: IdentityType;
    setPassword: (password: string) => void;
    validatePassword: (password: string) => boolean;
    companyName?: string;
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
    photo: {
        type: String;
        required: false;
    };
    website?: string;
}
