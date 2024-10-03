export interface PaymentReceiptDto {
  id?: number;
  parishAdminID: number;
  type: string;
  amount: number;
  smsUnits?: number;
  subscriptionPackage?: string;
  subscriptionMonths?: number;
  subscriptionRate?: number;
}

export interface SubscriptionDetailsDto {
  package: string;
  rate: number;
  months?: number;
  amount: number;
}
