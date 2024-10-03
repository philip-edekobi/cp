import { Router } from "express";
import {
  newProgram,
  editProgram,
  allPrograms,
  allProgramsForParish,
  getOneProgram,
  deleteProgram,
} from "../controllers/program";
import { auth, isAdmin, isParishAdmin } from "../middleware/auth";

const router = Router();

/**
 * @swagger
 * /program/all:
 *   get:
 *     summary: Get Every Church Program of all Churches in the system
 *     tags: [Parish Program]
 *     responses:
 *       200:
 *         description: Programs retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   parishAdminID:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Digging Deep
 *                   description:
 *                     type: string
 *                     example: Study the scripture in detail with the brethen
 *                   weekday:
 *                     type: string
 *                     example: Tuesday
 *                   time:
 *                     type: string
 *                     example: 6PM
 */
router.get("/all", auth, isAdmin, allPrograms);

/**
 * @swagger
 * /program?parishAdminID={id}:
 *   get:
 *     summary: Get Every Church Program of a Parish Admin
 *     tags: [Parish Program]
 *     responses:
 *       200:
 *         description: Programs retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   parishAdminID:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Digging Deep
 *                   description:
 *                     type: string
 *                     example: Study the scripture in detail with the brethen
 *                   weekday:
 *                     type: string
 *                     example: Tuesday
 *                   time:
 *                     type: string
 *                     example: 6PM
 */
router.get("", auth, allProgramsForParish);

/**
 * @swagger
 * /program/{id}:
 *   get:
 *     summary: Get a parish program using its id
 *     tags: [Parish Program]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The id of the program to get
 *     responses:
 *       200:
 *         description: Program retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 parishAdminID:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Digging Deep
 *                 description:
 *                   type: string
 *                   example: Study the scripture in detail with the brethen
 *                 weekday:
 *                   type: string
 *                   example: Tuesday
 *                 time:
 *                   type: string
 *                   example: 6PM
 *       400:
 *         description: Invalid input (Validation errors)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "id param required"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.get("/:id", getOneProgram);

/**
 * @swagger
 * /program:
 *   post:
 *     summary: Create a new Program
 *     tags: [Parish Program]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProgramSchema'
 *     responses:
 *       201:
 *         description: Program created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 parishAdminID:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Digging Deep
 *                 description:
 *                   type: string
 *                   example: Study the scripture in detail with the brethen
 *                 weekday:
 *                   type: string
 *                   example: Tuesday
 *                 time:
 *                   type: string
 *                   example: 6PM
 *       400:
 *         description: Invalid input (Validation errors)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "id param required"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.post("", auth, isParishAdmin, newProgram);

/**
 * @swagger
 * /program/{id}:
 *   patch:
 *     summary: Edits a  parish program using its id
 *     tags: [Parish Program]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The id of the program to edit
 *     responses:
 *       200:
 *         description: Program edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 parishAdminID:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Digging Deep
 *                 description:
 *                   type: string
 *                   example: Study the scripture in detail with the brethen
 *                 weekday:
 *                   type: string
 *                   example: Tuesday
 *                 time:
 *                   type: string
 *                   example: 6PM
 *       400:
 *         description: Invalid input (Validation errors)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "id param required"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.patch("/:id", auth, isParishAdmin, editProgram);

/**
 * @swagger
 * /program/{id}:
 *   delete:
 *     summary: Deletes a parish program using its id
 *     tags: [Parish Program]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The id of the program to delete
 *     responses:
 *       200:
 *         description: Program deleted successfully
 *       400:
 *         description: Invalid input (Validation errors)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "id param required"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.delete("/:id", auth, isParishAdmin, deleteProgram);

export default router;
