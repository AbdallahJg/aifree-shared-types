export interface IReview {
    _id: string;
    projectId: string;
    clientId: string;
    freelancerId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateReviewRequest {
    projectId: string;
    freelancerId: string;
    rating: number;
    comment: string;
}
export interface FreelancerReviewSummary {
    averageRating: number;
    totalReviews: number;
    ratingDistribution: {
        5: number;
        4: number;
        3: number;
        2: number;
        1: number;
    };
}
