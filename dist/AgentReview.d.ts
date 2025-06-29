export interface IAgentReview {
    _id?: string;
    taskId: string;
    userId: string;
    agentType: string;
    rating: number;
    comment: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CreateAgentReviewRequest {
    taskId: string;
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
