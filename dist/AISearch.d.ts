import type { ApiResponse } from './common.js';
import type { Freelancer } from './Freelancer.js';
import type { SaasSolution } from './SaasSolution.js';
export declare enum MatchReason {
    FREELANCER_SKILLS_MATCH = "FREELANCER_SKILLS_MATCH",
    FREELANCER_CATEGORY_SPECIALIST = "FREELANCER_CATEGORY_SPECIALIST",
    FREELANCER_AVAILABLE_NOW = "FREELANCER_AVAILABLE_NOW",
    FREELANCER_PARTIALLY_AVAILABLE = "FREELANCER_PARTIALLY_AVAILABLE",
    FREELANCER_HEADLINE_MATCH = "FREELANCER_HEADLINE_MATCH",
    FREELANCER_SENIOR_LEVEL = "FREELANCER_SENIOR_LEVEL",
    FREELANCER_JUNIOR_LEVEL = "FREELANCER_JUNIOR_LEVEL",
    FREELANCER_RELEVANT_EXPERIENCE = "FREELANCER_RELEVANT_EXPERIENCE",
    FREELANCER_MATCHING_PROFILE = "FREELANCER_MATCHING_PROFILE",
    AGENT_TAGS_SPECIALIZED = "AGENT_TAGS_SPECIALIZED",
    AGENT_CATEGORY_MATCH = "AGENT_CATEGORY_MATCH",
    AGENT_NAME_PERFECT_FOR = "AGENT_NAME_PERFECT_FOR",
    AGENT_FREE_TRIALS = "AGENT_FREE_TRIALS",
    AGENT_FREE_TO_USE = "AGENT_FREE_TO_USE",
    AGENT_LOW_COST = "AGENT_LOW_COST",
    AGENT_BUILT_IN = "AGENT_BUILT_IN",
    AGENT_CUSTOM = "AGENT_CUSTOM",
    AGENT_AI_AUTOMATION = "AGENT_AI_AUTOMATION",
    AGENT_AI_POWERED = "AGENT_AI_POWERED",
    SAAS_TAGS_PERFECT_FOR = "SAAS_TAGS_PERFECT_FOR",
    SAAS_CATEGORY_SOLUTION = "SAAS_CATEGORY_SOLUTION",
    SAAS_NAME_DESIGNED_FOR = "SAAS_NAME_DESIGNED_FOR",
    SAAS_FREE_TO_USE = "SAAS_FREE_TO_USE",
    SAAS_FREE_TIER = "SAAS_FREE_TIER",
    SAAS_ONE_TIME_PAYMENT = "SAAS_ONE_TIME_PAYMENT",
    SAAS_VERIFIED_SOLUTION = "SAAS_VERIFIED_SOLUTION",
    SAAS_FEATURED_SOLUTION = "SAAS_FEATURED_SOLUTION",
    SAAS_INCLUDES_FEATURE = "SAAS_INCLUDES_FEATURE",
    SAAS_READY_TO_USE_TOOL = "SAAS_READY_TO_USE_TOOL",
    SAAS_READY_TO_USE_SOLUTION = "SAAS_READY_TO_USE_SOLUTION",
    BUILTIN_AGENT_PERFECT_FOR_TASKS = "BUILTIN_AGENT_PERFECT_FOR_TASKS",
    BUILTIN_AGENT_SPECIALIZED_IN = "BUILTIN_AGENT_SPECIALIZED_IN",
    BUILTIN_AGENT_LOW_COST_PER_USE = "BUILTIN_AGENT_LOW_COST_PER_USE",
    BUILTIN_AGENT_AI_POWERED = "BUILTIN_AGENT_AI_POWERED"
}
export interface AIAgent {
    _id?: string;
    name: string;
    description?: string;
    photo?: string;
    category?: {
        _id?: string;
        name: string;
        description?: string;
    };
    ownerName?: string;
    tags?: string[];
    type: 'built-in' | 'custom';
    endpoint?: string;
}
export interface SearchQueryAnalysis {
    intent: string;
    keywords: string[];
    category?: string;
    skillsRequired?: string[];
    projectType?: string;
    budget?: {
        min?: number;
        max?: number;
    };
    urgency?: 'low' | 'medium' | 'high';
    complexity?: 'simple' | 'medium' | 'complex';
    preferredSolutionTypes?: ('freelancer' | 'agent' | 'saas')[];
}
export interface SearchResult {
    id: string;
    type: 'freelancer' | 'agent' | 'saas';
    relevanceScore: number;
    matchReason: MatchReason;
    data: Freelancer | AIAgent | SaasSolution;
}
export interface CategorizedSearchResults {
    freelancers: SearchResult[];
    agents: SearchResult[];
    saasSolutions: SearchResult[];
    bestFit: SearchResult[];
}
export interface AISearchRequest {
    query: string;
    userId?: string;
    context?: {
        userType?: string;
        previousSearches?: string[];
        userPreferences?: {
            preferredSolutionTypes?: ('freelancer' | 'agent' | 'saas')[];
            budgetRange?: {
                min?: number;
                max?: number;
            };
        };
    };
}
export interface AISearchResponse {
    query: string;
    analysis: SearchQueryAnalysis;
    results: CategorizedSearchResults;
    totalResults: number;
    searchTime: number;
    suggestions?: string[];
    searchId: string;
}
export interface SearchHistory {
    _id?: string;
    userId: string;
    searchId: string;
    query: string;
    analysis: SearchQueryAnalysis;
    totalResults: number;
    searchTime: number;
    timestamp: Date;
    clicked?: {
        resultId: string;
        resultType: 'freelancer' | 'agent' | 'saas';
        timestamp: Date;
    }[];
}
export interface AISearchApiResponse extends ApiResponse<AISearchResponse> {
}
export interface SearchHistoryApiResponse extends ApiResponse<SearchHistory[]> {
}
export interface SingleSearchHistoryApiResponse extends ApiResponse<SearchHistory> {
}
