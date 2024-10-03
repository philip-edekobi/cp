import { Request, Response } from "express";
import SubscriptionService from "../services/Subscription";
import { errResp, httpResp } from "../utils/http";
import { InitializeSubscriptionSchema } from "../validations/subscription";
import { SubscriptionDetailsDto } from "../dtos/payment";

export async function initSub(req: Request, res: Response) {
  try {
    const { error } = InitializeSubscriptionSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const paymentData = await SubscriptionService.init(
      1, //req.user!.id!,
      req.body as SubscriptionDetailsDto,
    );

    return httpResp(200, { paymentData }, res);
  } catch (err) {
    console.log(err);
    return errResp(500, err, res);
  }
}
