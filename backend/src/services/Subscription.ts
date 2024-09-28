import UserService from "./User";
import PaymentService from "./Payment";
import { PaymentReceiptDto } from "../dtos/payment";
import { ParishAdminDto } from "../dtos/user";

const SubscriptionPackageSMSMap = new Map([
  ["Free Trial", 3],
  ["Standard", 1000],
  ["Professional", 2000],
  ["Ultimate", 3000],
]);

type SubscriptionDetails = {
  package: string;
  rate: number;
  months?: number;
  amount: number;
};

type SubSummary = {
  parishAdmin: ParishAdminDto;
  payment?: PaymentReceiptDto;
};

export default class {
  static async createSub(
    parishAdminID: number,
    details: SubscriptionDetails,
  ): Promise<SubSummary> {
    const rn = new Date();

    const updateDetails = <Partial<ParishAdminDto>>{
      availableSmsUnits: SubscriptionPackageSMSMap.get(details.package),
      subscriptionValid: true,
      subscriptionExpiresAt: details.months
        ? new Date(rn.setMonth(rn.getMonth() + details.months))
        : undefined,
    };

    const parishAdmin = (await UserService.updateUserByID(
      parishAdminID,
      updateDetails,
      "pa",
    )) as ParishAdminDto;

    let payment;
    if (details.package !== "Free Trial") {
      payment = (await PaymentService.newPayment({
        type: "subscription",
        subscriptionPackage: details.package,
        amount: details.amount,
        parishAdminID: parishAdminID,
        subscriptionMonths: details.months,
        subscriptionRate: details.rate,
      })) as PaymentReceiptDto;
    }
    return { parishAdmin, payment };
  }
}
