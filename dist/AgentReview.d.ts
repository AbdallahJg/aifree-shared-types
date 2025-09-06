export interface IAgentReview {
    _id?: string;
    userId: string;
    agentId: string;
    agentType: string;
    rating: number;
    comment: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IAgentReviewWithUser extends Omit<IAgentReview, 'userId'> {
    userId: {
        _id: string;
        name: string;
        email: string;
        username?: string;
        companyName?: string;
    };
}
export interface CreateAgentReviewRequest {
    agentType: string;
    rating: number;
    comment: string;
}
export interface AgentReviewSummary {
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
