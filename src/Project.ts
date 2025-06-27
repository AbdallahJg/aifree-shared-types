export enum ProjectStatus {
  DRAFT = "draft",
  OPEN = "open",
  PENDING_FREELANCER_ACCEPTANCE = "pending_freelancer_acceptance",
  IN_PROGRESS = "in_progress",
  PENDING_VALIDATION = "pending_validation",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface IAttachment {
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: Date;
}

export interface IFreelancerApplications {
  _id: string;
  conversationId?: string;
  freelancerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  jobFamilyId: string;
  jobCategoryId: string;
  startDate: Date;
  endDate?: Date;
  needsHumanValidation?: boolean;
  freelancerApplications?: IFreelancerApplications[];
  agentName?: string;
  freelancerId?: string;
  validationInstructions?: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
  clientId: string;
  budget: number;
  attachments?: IAttachment[];
  conversationId?: string;
  taskId?: string;
}
