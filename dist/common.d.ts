export type IdentityType = "admin" | "client" | "freelancer" | "agent";
export interface ApiResponse<T> {
    data?: T;
    error?: string;
    message?: string;
    status: number;
}
export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export interface ValidationError {
    field: string;
    message: string;
}
export interface ApiError {
    code: string;
    message: string;
    errors?: ValidationError[];
}
