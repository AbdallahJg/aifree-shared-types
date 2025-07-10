export declare enum OfferStatus {
    PENDING = "pending",
    ACCEPTED = "accepted",
    DECLINED = "declined",
    WITHDRAWN = "withdrawn"
}
export interface IOffer {
    _id: string;
    freelancerId: string;
    projectId: string;
    amount: number;
    message?: string;
    status: OfferStatus;
    createdAt: Date;
    updatedAt: Date;
    freelancer?: {
        _id: string;
        name: string;
        surname: string;
        headline?: string;
        photo?: string;
        photoUrl?: string;
        imageUrl?: string;
        experience?: string;
        skills?: string[];
    };
}
export interface CreateOfferDto {
    projectId: string;
    amount: number;
    message?: string;
}
export interface UpdateOfferDto {
    status?: OfferStatus;
    message?: string;
}
