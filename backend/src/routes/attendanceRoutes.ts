import { Router } from "express";
import {
  newAttendance,
  editAttendance,
  getOneAttendance,
  allAttendanceForParish,
} from "../controllers/attendance";
import { auth, isParishAdmin } from "../middleware/auth";

const router = Router();

/**
 * @swagger
 * /attendance:
 *   get:
 *     summary: Get Every Attendance for a Parish
 *     tags: [Parish Attendance]
 *     responses:
 *       200:
 *         description: Attendances retrieved successfully
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
 *                   date:
 *                     type: date
 *                     example: 3/13/2024
 *                   total:
 *                     type: number
 *                     example: 129
 *                   male:
 *                     type: number
 *                     example: 57
 *                   female:
 *                     type: number
 *                     example: 72
 *                   adults:
 *                     type: number
 *                     example: 40
 *                   men:
 *                     type: number
 *                     example: 22
 *                   women:
 *                     type: number
 *                     example: 18
 *                   teenagers:
 *                     type: number
 *                     example: 48
 *                   maleTeenagers:
 *                     type: number
 *                     example: 18
 *                   femaleTeenagers:
 *                     type: number
 *                     example: 30
 *                   children:
 *                     type: number
 *                     example: 21
 *                   maleChildren:
 *                     type: number
 *                     example: 10
 *                   femaleChildren:
 *                     type: number
 *                     example: 11
 *                   workers:
 *                     type: number
 *                     example: 18
 */
router.get("", allAttendanceForParish);

/**
 * @swagger
 * /attendance/{id}:
 *   get:
 *     summary: Retrieve an Attendance by id
 *     tags: [Parish Attendance]
 *     responses:
 *       200:
 *         description: Attendances fetched successfully
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
 *                 date:
 *                   type: date
 *                   example: 3/13/2024
 *                 total:
 *                   type: number
 *                   example: 129
 *                 male:
 *                   type: number
 *                   example: 57
 *                 female:
 *                   type: number
 *                   example: 72
 *                 adults:
 *                   type: number
 *                   example: 40
 *                 men:
 *                   type: number
 *                   example: 22
 *                 women:
 *                   type: number
 *                   example: 18
 *                 teenagers:
 *                   type: number
 *                   example: 48
 *                 maleTeenagers:
 *                   type: number
 *                   example: 18
 *                 femaleTeenagers:
 *                   type: number
 *                   example: 30
 *                 children:
 *                   type: number
 *                   example: 21
 *                 maleChildren:
 *                   type: number
 *                   example: 10
 *                 femaleChildren:
 *                   type: number
 *                   example: 11
 *                 workers:
 *                   type: number
 *                   example: 18
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
router.get("/:id", getOneAttendance);

/**
 * @swagger
 * /attendance:
 *   post:
 *     summary: Create a new Attendance record
 *     tags: [Parish Attendance]
 *     responses:
 *       201:
 *         description: Attendances successfully created
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
 *                 date:
 *                   type: date
 *                   example: 3/13/2024
 *                 total:
 *                   type: number
 *                   example: 129
 *                 male:
 *                   type: number
 *                   example: 57
 *                 female:
 *                   type: number
 *                   example: 72
 *                 adults:
 *                   type: number
 *                   example: 40
 *                 men:
 *                   type: number
 *                   example: 22
 *                 women:
 *                   type: number
 *                   example: 18
 *                 teenagers:
 *                   type: number
 *                   example: 48
 *                 maleTeenagers:
 *                   type: number
 *                   example: 18
 *                 femaleTeenagers:
 *                   type: number
 *                   example: 30
 *                 children:
 *                   type: number
 *                   example: 21
 *                 maleChildren:
 *                   type: number
 *                   example: 10
 *                 femaleChildren:
 *                   type: number
 *                   example: 11
 *                 workers:
 *                   type: number
 *                   example: 18
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
router.post("", auth, isParishAdmin, newAttendance);

/**
 * @swagger
 * /attendance/{id}:
 *   patch:
 *     summary: Edit an Attendance by id
 *     tags: [Parish Attendance]
 *     responses:
 *       200:
 *         description: Attendances successfully edited
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
 *                 date:
 *                   type: date
 *                   example: 3/13/2024
 *                 total:
 *                   type: number
 *                   example: 129
 *                 male:
 *                   type: number
 *                   example: 57
 *                 female:
 *                   type: number
 *                   example: 72
 *                 adults:
 *                   type: number
 *                   example: 40
 *                 men:
 *                   type: number
 *                   example: 22
 *                 women:
 *                   type: number
 *                   example: 18
 *                 teenagers:
 *                   type: number
 *                   example: 48
 *                 maleTeenagers:
 *                   type: number
 *                   example: 18
 *                 femaleTeenagers:
 *                   type: number
 *                   example: 30
 *                 children:
 *                   type: number
 *                   example: 21
 *                 maleChildren:
 *                   type: number
 *                   example: 10
 *                 femaleChildren:
 *                   type: number
 *                   example: 11
 *                 workers:
 *                   type: number
 *                   example: 18
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
router.patch("/:id", auth, isParishAdmin, editAttendance);

export default router;
