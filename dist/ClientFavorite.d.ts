import { ApiResponse } from "./common";
import { UserProfile } from "./User";
export interface IClientFavorite {
    id: string;
    client: string;
    freelancer: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ClientFavoriteResponse extends ApiResponse<IClientFavorite> {
}
export interface ClientFavoriteWithFreelancer extends IClientFavorite {
    freelancerData: UserProfile;
}
export interface ClientFavoritesListResponse extends ApiResponse<ClientFavoriteWithFreelancer[]> {
}
export interface AddFavoriteRequest {
    freelancerId: string;
    notes?: string;
}
export interface UpdateFavoriteRequest {
    notes?: string;
}
