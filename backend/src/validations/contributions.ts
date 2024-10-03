import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateContributionSchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - memberID
 *         - programID
 *         - paymentMode
 *         - contributionTypeID
 *         - transactionDate
 *         - amount
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 *         memberID:
 *           type: number
 *           default: 3
 *         phone:
 *           type: string
 *           default: +1(201)923923
 *         email:
 *           type: string
 *           default: ppike@gmail.com
 *         address:
 *           type: string
 *           default: 6, Oakland Drive, NY
 *         programID:
 *           type: number
 *           default: 2
 *         description:
 *           type: string
 *           default: Pledge
 *         paymentMode:
 *           type: string
 *           default: Bank Transfer
 *         contributionTypeID:
 *           type: number
 *           default: 1
 *         transactionDate:
 *           type: date
 *           default: 11/20/2022
 *         amount:
 *           type: number
 *           default: 450
 */
export const CreateContributionSchema = Joi.object({
  parishAdminID: Joi.number().required(),
  memberID: Joi.number().required(),
  phone: Joi.string(),
  email: Joi.string(),
  address: Joi.string(),
  programID: Joi.number().required(),
  description: Joi.string(),
  paymentMode: Joi.string().required(),
  contributionTypeID: Joi.number().required(),
  transactionDate: Joi.date().required(),
  amount: Joi.number().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     EditContributionSchema:
 *       type: object
 *       properties:
 *         memberID:
 *           type: number
 *           default: 3
 *         phone:
 *           type: string
 *           default: +1(201)923923
 *         email:
 *           type: string
 *           default: ppike@gmail.com
 *         address:
 *           type: string
 *           default: 6, Oakland Drive, NY
 *         programID:
 *           type: number
 *           default: 2
 *         description:
 *           type: string
 *           default: Pledge
 *         paymentMode:
 *           type: string
 *           default: Bank Transfer
 *         contributionTypeID:
 *           type: number
 *           default: 1
 *         transactionDate:
 *           type: date
 *           default: 11/20/2022
 *         amount:
 *           type: number
 *           default: 450
 */
export const EditContributionSchema = Joi.object({
  memberID: Joi.number(),
  phone: Joi.string(),
  email: Joi.string(),
  address: Joi.string(),
  programID: Joi.number(),
  description: Joi.string(),
  paymentMode: Joi.string(),
  contributionTypeID: Joi.number(),
  transactionDate: Joi.date(),
  amount: Joi.number(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateContributionTypeSchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - contributionType
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 *         contributionType:
 *           type: string
 *           default: Tithe
 *         description:
 *           type: string
 *           default: 10% of your income
 */
export const CreateContributionTypeSchema = Joi.object({
  parishAdminID: Joi.number().required(),
  contributionType: Joi.string().required(),
  description: Joi.string(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     EditContributionTypeSchema:
 *       type: object
 *       properties:
 *         contributionType:
 *           type: string
 *           default: Tithe
 *         description:
 *           type: string
 *           default: 10% of your income
 */
export const EditContributionTypeSchema = Joi.object({
  contributionType: Joi.string(),
  description: Joi.string(),
});
