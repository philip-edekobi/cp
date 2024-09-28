import { IParishPaymentModel } from "../database/models/Payment";
import PayRepo from "../database/repositories/PaymentRepo";
import { PaymentReceiptDto } from "../dtos/payment";

export default class {
  static async newPayment(
    details: PaymentReceiptDto,
  ): Promise<PaymentReceiptDto> {
    try {
      const payment = await PayRepo.create(details as IParishPaymentModel);

      return payment as PaymentReceiptDto;
    } catch (err) {
      throw err;
    }
  }

  static async allPayments(): Promise<PaymentReceiptDto[]> {
    try {
      const payments = await PayRepo.getAll();

      return payments as PaymentReceiptDto[];
    } catch (err) {
      throw err;
    }
  }
}
