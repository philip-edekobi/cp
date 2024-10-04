import { Router } from "express";
import { login, newMember, edit } from "../controllers/churchMember";
import { auth, isMember } from "../middleware/auth";

const router = Router();

/**
 * @swagger
 * /member:
 *   post:
 *     summary: Creates a new Church Member
 *     tags: [Church Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateMemberSchema'
 *     responses:
 *       201:
 *         description: Church Member created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: null
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                        parishAdminID:
 *                          type: number
 *                          example: 3
 *                        surname:
 *                          type: string
 *                          example: Mallory
 *                        othernames:
 *                          type: string
 *                          example: Grace Johnson
 *                        title:
 *                          type: string
 *                          example: Mrs
 *                        designation:
 *                          type: string
 *                          example: Parish Pastor
 *                        homeAddress:
 *                          type: string
 *                          example: null
 *                        gender:
 *                          type: string
 *                          example: Female
 *                        ageCategory:
 *                          type: string
 *                          example: YOuth
 *                        phone:
 *                          type: string
 *                          example: +2349018175771
 *                        email:
 *                          type: string
 *                          example: mike@gmail.com
 *                        dateJoined:
 *                          type: Date
 *                          example: 2/27/2018
 *                        dob:
 *                          type: Date
 *                          example: 2/27/2018
 *                        weddingAnniversary:
 *                          type: Date
 *                          example: 2/27/2018
 *                        department:
 *                          type: string
 *                          example: Music Department
 *                        fellowship:
 *                          type: string
 *                          example: Grace House Fellowship
 *                        occupation:
 *                          type: string
 *                          example: Engineer
 *                        employer:
 *                          type: string
 *                          example: Google
 *                        officeAddress:
 *                          type: string
 *                          example: null
 *                        isBornAgain:
 *                          type: boolean
 *                          example: false
 *                        yearBornAgain:
 *                          type: number
 *                          example: 2003
 *                        hasCompletedBelieversClass:
 *                          type: boolean
 *                          example: false
 *                        yearCompletedBelieversClass:
 *                          type: number
 *                          example: null
 *                        isWaterBaptised:
 *                          type: boolean
 *                          example: true
 *                        yearWaterBaptised:
 *                          type: number
 *                          example: 2015
 *                        hasCompletedSchoolOfDiscipleship:
 *                          type: boolean
 *                          example: true
 *                        yearCompletedSchoolOfDiscipleship:
 *                          type: number
 *                          example: 2015
 *                        profileImageUrl:
 *                          type: string
 *                          example: https://server.loc/img
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
 *                     details:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           message:
 *                             type: string
 *                             example: "Field is required"
 *                           type:
 *                             type: string
 *                             example: any
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.post("", newMember);

/**
 * @swagger
 * /member/login:
 *   post:
 *     summary: Logs in a Church Member
 *     tags: [Church Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginSchema'
 *     responses:
 *       200:
 *         description: Member logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: null
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "ereafokoijdfo..."
 *       400:
 *         description: Invalid input - Validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     details:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           message:
 *                             type: string
 *                             example: "Field is required"
 *                           type:
 *                             type: string
 *                             example: any
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                       message:
 *                         type: string
 *                         example: "user not found"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.post("/login", login);

/**
 * @swagger
 * /member:
 *   patch:
 *     summary: Edits a Church Member
 *     tags: [Church Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EditMemberSchema'
 *     responses:
 *       200:
 *         description: Church Member Edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   example: null
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                        parishAdminID:
 *                          type: number
 *                          example: 3
 *                        surname:
 *                          type: string
 *                          example: Mallory
 *                        othernames:
 *                          type: string
 *                          example: Grace Johnson
 *                        title:
 *                          type: string
 *                          example: Mrs
 *                        designation:
 *                          type: string
 *                          example: Parish Pastor
 *                        homeAddress:
 *                          type: string
 *                          example: null
 *                        gender:
 *                          type: string
 *                          example: Female
 *                        ageCategory:
 *                          type: string
 *                          example: YOuth
 *                        phone:
 *                          type: string
 *                          example: +2349018175771
 *                        email:
 *                          type: string
 *                          example: mike@gmail.com
 *                        dateJoined:
 *                          type: Date
 *                          example: 2/27/2018
 *                        dob:
 *                          type: Date
 *                          example: 2/27/2018
 *                        weddingAnniversary:
 *                          type: Date
 *                          example: 2/27/2018
 *                        department:
 *                          type: string
 *                          example: Music Department
 *                        fellowship:
 *                          type: string
 *                          example: Grace House Fellowship
 *                        occupation:
 *                          type: string
 *                          example: Engineer
 *                        employer:
 *                          type: string
 *                          example: Google
 *                        officeAddress:
 *                          type: string
 *                          example: null
 *                        isBornAgain:
 *                          type: boolean
 *                          example: false
 *                        yearBornAgain:
 *                          type: number
 *                          example: 2003
 *                        hasCompletedBelieversClass:
 *                          type: boolean
 *                          example: false
 *                        yearCompletedBelieversClass:
 *                          type: number
 *                          example: null
 *                        isWaterBaptised:
 *                          type: boolean
 *                          example: true
 *                        yearWaterBaptised:
 *                          type: number
 *                          example: 2015
 *                        hasCompletedSchoolOfDiscipleship:
 *                          type: boolean
 *                          example: true
 *                        yearCompletedSchoolOfDiscipleship:
 *                          type: number
 *                          example: 2015
 *                        profileImageUrl:
 *                          type: string
 *                          example: https://server.loc/img
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
 *                     details:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           message:
 *                             type: string
 *                             example: "Field is required"
 *                           type:
 *                             type: string
 *                             example: any
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   example: null
 */
router.patch("", auth, isMember, edit);

export default router;
