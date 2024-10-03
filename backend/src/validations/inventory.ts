import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateInventoryCategorySchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - name
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 *         name:
 *           type: string
 *           default: Musical Instrument
 */
export const CreateInventoryCategorySchema = Joi.object({
  parishAdminID: Joi.number().required(),
  name: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     EditInventoryCategorySchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           default: Musical Instrument
 */
export const EditInventoryCategorySchema = Joi.object({
  name: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateInventoryAssetSchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - name
 *         - value
 *         - status
 *         - categoryID
 *         - departmentID
 *         - dateProcured
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 1
 *         name:
 *           type: string
 *           default: Yamaha PSR-E463
 *         value:
 *           type: string
 *           default: $250
 *         status:
 *           type: string
 *           default: Working
 *         categoryID:
 *           type: number
 *           default: 1
 *         departmentID:
 *           type: number
 *           default: 3
 *         dateProcured:
 *           type: date
 *           default: 3/15/2020
 */
export const CreateInventoryAssetSchema = Joi.object({
  parishAdminID: Joi.number(),
  name: Joi.string().required(),
  value: Joi.string().required(),
  status: Joi.string().required(),
  categoryID: Joi.number().required(),
  departmentID: Joi.number().required(),
  dateProcured: Joi.date().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     EditInventoryAssetSchema:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           default: Yamaha PSR-E463
 *         value:
 *           type: string
 *           default: $250
 *         status:
 *           type: string
 *           default: Working
 *         categoryID:
 *           type: number
 *           default: 1
 *         departmentID:
 *           type: number
 *           default: 3
 *         dateProcured:
 *           type: date
 *           default: 3/15/2020
 */
export const EditInventoryAssetSchema = Joi.object({
  name: Joi.string(),
  value: Joi.string(),
  status: Joi.string(),
  categoryID: Joi.number(),
  departmentID: Joi.number(),
  dateProcured: Joi.date(),
});
