import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateProgramSchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - name
 *         - description
 *         - weekday
 *         - time
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 *         name:
 *           type: string
 *           default: Sunday Service
 *         description:
 *           type: string
 *           default: Sabbath experience on the Lord's holy day
 *         weekday:
 *           type: string
 *           default: Sunday
 *         time:
 *           type: string
 *           default: 8AM
 */
export const CreateProgramSchema = Joi.object({
  parishAdminID: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  weekday: Joi.string().required(),
  time: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     EditProgramSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           default: Sunday Service
 *         description:
 *           type: string
 *           default: Sabbath experience on the Lord's holy day
 *         weekday:
 *           type: string
 *           default: Sunday
 *         time:
 *           type: string
 *           default: 8AM
 */
export const EditProgramSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  weekday: Joi.string(),
  time: Joi.string(),
});
