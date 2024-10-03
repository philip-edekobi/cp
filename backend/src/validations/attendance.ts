import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateAttendanceSchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - date
 *         - total
 *         - adults
 *         - teenagers
 *         - children
 *         - workers
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 *         date:
 *           type: date
 *           default: 10/25/2024 (Note -- MM/DD/YYYY)
 *         total:
 *           type: number
 *           default: 100
 *         male:
 *           type: number
 *           default: 42
 *         female:
 *           type: number
 *           default: 58
 *         adults:
 *           type: number
 *           default: 65
 *         men:
 *           type: number
 *           default: 25
 *         women:
 *           type: number
 *           default: 40
 *         teenagers:
 *           type: number
 *           default: 17
 *         maleTeenagers:
 *           type: number
 *           default: 7
 *         femaleTeenagers:
 *           type: number
 *           default: 10
 *         children:
 *           type: number
 *           default: 6
 *         maleChildren:
 *           type: number
 *           default: 2
 *         femaleChildren:
 *           type: number
 *           default: 4
 *         workers:
 *           type: number
 *           default: 12
 */
export const CreateAttendanceSchema = Joi.object({
  parishAdminID: Joi.number().required(),
  date: Joi.date().required(),
  total: Joi.number().required(),
  male: Joi.number(),
  female: Joi.number(),
  adults: Joi.number().required(),
  men: Joi.number(),
  women: Joi.number(),
  teenagers: Joi.number().required(),
  maleTeenagers: Joi.number(),
  femaleTeenagers: Joi.number(),
  children: Joi.number().required(),
  maleChildren: Joi.number(),
  femaleChildren: Joi.number(),
  workers: Joi.number().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     EditAttendanceSchema:
 *       type: object
 *       properties:
 *         date:
 *           type: date
 *           default: 10/25/2024 (Note -- MM/DD/YYYY)
 *         total:
 *           type: number
 *           default: 100
 *         male:
 *           type: number
 *           default: 42
 *         female:
 *           type: number
 *           default: 58
 *         adults:
 *           type: number
 *           default: 65
 *         men:
 *           type: number
 *           default: 25
 *         women:
 *           type: number
 *           default: 40
 *         teenagers:
 *           type: number
 *           default: 17
 *         maleTeenagers:
 *           type: number
 *           default: 7
 *         femaleTeenagers:
 *           type: number
 *           default: 10
 *         children:
 *           type: number
 *           default: 6
 *         maleChildren:
 *           type: number
 *           default: 2
 *         femaleChildren:
 *           type: number
 *           default: 4
 *         workers:
 *           type: number
 *           default: 12
 */
export const EditAttendanceSchema = Joi.object({
  date: Joi.date(),
  total: Joi.number(),
  male: Joi.number(),
  female: Joi.number(),
  adults: Joi.number(),
  men: Joi.number(),
  women: Joi.number(),
  teenagers: Joi.number(),
  maleTeenagers: Joi.number(),
  femaleTeenagers: Joi.number(),
  children: Joi.number(),
  maleChildren: Joi.number(),
  femaleChildren: Joi.number(),
  workers: Joi.number(),
});
