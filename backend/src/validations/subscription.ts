import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     InitializeSubscriptionSchema:
 *       type: object
 *       required:
 *         - package
 *         - rate
 *         - amount
 *       properties:
 *         package:
 *           type: string
 *           default: Standard
 *         amount:
 *           type: number
 *           default: 100
 *         months:
 *           type: number
 *           default: 4
 *         rate:
 *           type: number
 *           default: 25
 */
export const InitializeSubscriptionSchema = Joi.object({
  package: Joi.string().required(),
  rate: Joi.number().required(),
  months: Joi.number(),
  amount: Joi.number().required(),
});
