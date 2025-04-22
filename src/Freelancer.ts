import { IdentityType, ApiResponse } from "./common";
import { UserProfile } from "./User";

export interface Experience {
  id?: string;
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  current: boolean;
}

export interface ComplianceDocument {
  id?: string;
  type: "ID" | "TAX" | "CERTIFICATION" | "INSURANCE" | "OTHER";
  name: string;
  fileUrl: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  uploadDate: Date;
  expiryDate?: Date;
  rejectionReason?: string;
}

export interface Availability {
  status: "AVAILABLE" | "PARTIALLY_AVAILABLE" | "UNAVAILABLE";
  availableHours?: number;
  startDate?: Date;
  endDate?: Date;
  note?: string;
}

export interface FreelancerProfile extends UserProfile {
  profilePicture?: string;
  description?: string;
  experiences: Experience[];
  skills: string[];
  availability: Availability;
  complianceDocuments: ComplianceDocument[];
  hourlyRate?: number;
  rating?: number;
  projectsCompleted?: number;
  lastActive?: Date;
  languages?: {
    language: string;
    proficiency: "BASIC" | "INTERMEDIATE" | "FLUENT" | "NATIVE";
  }[];
}

export interface FreelancerResponse extends ApiResponse<FreelancerProfile> {}

export interface FreelancerUpdateRequest {
  profilePicture?: string;
  description?: string;
  experiences?: Experience[];
  skills?: string[];
  availability?: Availability;
  hourlyRate?: number;
  languages?: {
    language: string;
    proficiency: "BASIC" | "INTERMEDIATE" | "FLUENT" | "NATIVE";
  }[];
}

export interface UploadDocumentRequest {
  type: ComplianceDocument["type"];
  name: string;
  expiryDate?: Date;
}

export interface UploadDocumentResponse
  extends ApiResponse<ComplianceDocument> {}
