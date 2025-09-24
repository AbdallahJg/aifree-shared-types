import { ApiResponse } from "./common.js";
export type OrganizationRole = "admin" | "member";
export interface IOrganization {
    _id: string;
    name: string;
    description?: string;
    logo?: string;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ITeamMember {
    _id: string;
    organizationId: string;
    userId: string;
    role: OrganizationRole;
    joinedAt: Date;
    invitedBy: string;
}
export interface IInvitation {
    _id: string;
    organizationId: string;
    email: string;
    role: OrganizationRole;
    invitedBy: string;
    status: "pending" | "accepted" | "rejected" | "expired";
    token: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserWithOrganization {
    _id: string;
    email: string;
    name?: string;
    type: string;
    organizationId?: string;
    organizationRole?: OrganizationRole;
    organization?: IOrganization;
}
export interface CreateOrganizationRequest {
    name: string;
    description?: string;
}
export interface InviteTeamMemberRequest {
    email: string;
    role: OrganizationRole;
}
export interface AcceptInvitationRequest {
    token: string;
    name: string;
    password: string;
    photo?: string;
}
export interface UpdateTeamMemberRoleRequest {
    userId: string;
    role: OrganizationRole;
}
export interface OrganizationResponse extends ApiResponse<IOrganization> {
}
export interface TeamMemberResponse extends ApiResponse<ITeamMember> {
}
export interface InvitationResponse extends ApiResponse<IInvitation> {
}
export interface OrganizationWithMembersResponse extends ApiResponse<{
    organization: IOrganization;
    members: (ITeamMember & {
        user: {
            _id: string;
            email: string;
            name?: string;
            photo?: string;
        };
    })[];
    pendingInvitations: IInvitation[];
}> {
}
export interface TeamDashboardData {
    totalMembers: number;
    totalProjects: number;
    activeProjects: number;
    recentActivity: {
        type: "project_created" | "project_assigned" | "member_joined" | "project_completed";
        userId: string;
        userName?: string;
        projectId?: string;
        projectTitle?: string;
        timestamp: Date;
    }[];
    memberStats: {
        userId: string;
        userName?: string;
        projectsCount: number;
        activeProjectsCount: number;
        completedProjectsCount: number;
        lastActivity: Date;
    }[];
}
export interface TeamDashboardResponse extends ApiResponse<TeamDashboardData> {
}
