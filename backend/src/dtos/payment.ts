export interface PaymentReceiptDto {
  parishAdminID: number;
  type: string;
  amount: number;
  smsUnits?: number;
  subscriptionPackage?: string;
  subscriptionMonths?: number;
  subscriptionRate?: number;
}
