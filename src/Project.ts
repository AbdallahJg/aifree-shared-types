export enum ProjectStatus {
  DRAFT = "draft",
  OPEN = "open",
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

export interface IProject {
  _id: string;
  title: string;
  description: string;
  jobFamilyId: string;
  jobCategoryId: string;
  startDate: Date;
  endDate?: Date;
  needsHumanValidation?: boolean;
  agentName?: string;
  freelancerId?: string;
  validationInstructions?: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
  clientId: string;
  budget: number;
  attachments?: IAttachment[];
}
