import { ApiResponse } from "./common.js";

// Transaction Analytics Types
export interface SpendingSummary {
  totalSpent: number;
  totalTransactions: number;
  averageSpending: number;
}

export interface MonthlyTrend {
  _id: {
    year: number;
    month: number;
  };
  spent: number;
  transactions: number;
}

export interface TopAgent {
  _id: string;
  totalSpent: number;
  usageCount: number;
  lastUsed: Date;
}

export interface RecentActivity {
  _id: string;
  amount: number;
  description: string;
  createdAt: Date;
  agentType?: string;
  translationKey?: string;
}

export interface PurchaseVsUsage {
  _id: string;
  total: number;
  count: number;
}

export interface TransactionAnalytics {
  spendingSummary: SpendingSummary;
  monthlyTrends: MonthlyTrend[];
  topAgents: TopAgent[];
  recentActivity: RecentActivity[];
  purchaseVsUsage: PurchaseVsUsage[];
}

// Project Analytics Types
export interface ProjectSummaryItem {
  _id: string;
  count: number;
  totalBudget: number;
}

export interface MonthlyProjectTrend {
  _id: {
    year: number;
    month: number;
  };
  projectsCreated: number;
  totalBudget: number;
}

export interface RecentProject {
  _id: string;
  title: string;
  status: string;
  budget: number;
  createdAt: Date;
  freelancerId?: {
    _id: string;
    name: string;
    email: string;
  };
}

export interface BudgetAnalysis {
  totalBudget: number;
  averageBudget: number;
  minBudget: number;
  maxBudget: number;
  projectCount: number;
}

export interface TopFreelancer {
  _id: string;
  projectCount: number;
  totalBudget: number;
  avgBudget: number;
}

export interface ProjectAnalytics {
  projectSummary: ProjectSummaryItem[];
  monthlyProjectTrends: MonthlyProjectTrend[];
  recentProjects: RecentProject[];
  budgetAnalysis: BudgetAnalysis;
  topFreelancers: TopFreelancer[];
}

// Dashboard User Data
export interface DashboardUser {
  id: string;
  name?: string;
  email: string;
  balance: number;
  type: string;
}

// Complete Dashboard Response
export interface ClientDashboardData {
  user: DashboardUser;
  transactions: TransactionAnalytics;
  projects: ProjectAnalytics;
}

export interface ClientDashboardResponse
  extends ApiResponse<ClientDashboardData> {
  success: boolean;
}
