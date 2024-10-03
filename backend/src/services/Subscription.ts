import UserService from "./User";
import PaymentService from "./Payment";
import { PaymentReceiptDto } from "../dtos/payment";
import { ParishAdminDto } from "../dtos/user";
import { SubscriptionDetailsDto } from "../dtos/payment";
import { SubscriptionPackageSMSMap } from "../utils/subscription";
import { createOrder, capturePayment } from "../utils/paypal";

type SubSummary = {
  parishAdmin: ParishAdminDto;
  payment?: PaymentReceiptDto;
};

export default class {
  static async createSub(
    parishAdminID: number,
    details: SubscriptionDetailsDto,
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

  static async init(parishAdminID: number, details: SubscriptionDetailsDto) {
    try {
      // TODO if free skip all this nonsense and just create the sub
      if (details.package === "Free Trial") {
        await this.createSub(parishAdminID, details);
      } else {
        const paypalData = await createOrder(details);

        return paypalData;
      }
    } catch (err) {
      throw err;
    }
  }
}
