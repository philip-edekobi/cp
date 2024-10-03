import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     ByParishAdminQuery:
 *       type: object
 *       required:
 *         - parishAdminID
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 */
export const ByParishAdminQuery = Joi.object({
  parishAdminID: Joi.number().required(),
});
