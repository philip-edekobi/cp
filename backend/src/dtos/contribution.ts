export interface ContributionDto {
  id?: number;
  parishAdminID: number;
  memberID: number;
  phone?: string;
  email?: string;
  address?: string;
  programID: number;
  description?: string;
  paymentMode: string;
  contributionTypeID: number;
  transactionDate: Date;
  amount: number;
}

export interface ContributionTypeDto {
  id?: number;
  parishAdminID: number;
  contributionType: string;
  description?: string;
}
