export enum ProjectStatus {
  DRAFT = "draft",
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  PENDING_VALIDATION = "pending_validation",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum OutputFormat {
  TEXT = "text",
  IMAGE = "image",
  CODE = "code",
  AUDIO = "audio",
  VIDEO = "video",
  OTHER = "other",
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  jobFamilyId: string;
  jobCategoryId: string;
  startDate: Date;
  endDate: Date;
  needsHumanValidation: boolean;
  outputFormat: OutputFormat;
  agentName?: string;
  freelancerId?: string;
  validationInstructions?: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
  clientId: string;
  budget: number;
}
