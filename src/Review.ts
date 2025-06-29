import { IProject } from "./Project.js";
import { IUser } from "./User.js";

export interface IReview {
  _id: string;
  projectId: string | IProject;
  clientId: string | IUser;
  freelancerId: string | IUser;
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
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}
