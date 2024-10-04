import { Router } from "express";
import { edit, login, newParishAdmin } from "../controllers/parishAdmin";
import { auth, isParishAdmin } from "../middleware/auth";

const router = Router();

/**
 * @swagger
 * /parish-admin:
 *   post:
 *     summary: Creates a new Parish Admin
 *     tags: [Parish Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateParishAdminSchema'
 *     responses:
 *       201:
 *         description: Parish Admin created successfully
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
 *                         churchName:
 *                           type: string
 *                           example: The Redeemed Christian Church of God
 *                         churchNameAbbr:
 *                           type: string
 *                           example: RCCG
 *                         authorizedName:
 *                           type: string
 *                           example: Pastor Matthew
 *                         email:
 *                           type: string
 *                           example: matt@gmail.com
 *                         phone:
 *                           type: string
 *                           example: +1(201)566734
 *                         address:
 *                           type: string
 *                           example: 5, Oakwood Street, Brooklyn, NY
 *                         fax:
 *                           type: string
 *                           example: null
 *                         website:
 *                           type: string
 *                           example: rccg.com
 *                         remittancePercentage:
 *                           type: number
 *                           example: 5
 *                         logo:
 *                           type: string
 *                           example: https://server.com/path
 *                         signature:
 *                           type: string
 *                           example: https://server.com/path
 *                         financialStatement:
 *                           type: string
 *                           example: https://server.com/path
 *                         profileImageUrl:
 *                           type: string
 *                           example: null
 *                         subscriptionValid:
 *                           type: boolean
 *                           example: true
 *                         subscriptionExpiresAt:
 *                           type: Date
 *                           example: 9/12/2024
 *                         availableSmsUnits:
 *                           type: number
 *                           example: 0
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
router.post("", newParishAdmin);

/**
 * @swagger
 * /parish-admin/login:
 *   post:
 *     summary: Logs in a Parish Admin
 *     tags: [Parish Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginSchema'
 *     responses:
 *       200:
 *         description: Parish Admin logged in successfully
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
 * /parish-admin:
 *   patch:
 *     summary: Edits a Parish Admin
 *     tags: [Parish Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EditParishAdminSchema'
 *     responses:
 *       200:
 *         description: Parish Admin edited successfully
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
 *                         churchName:
 *                           type: string
 *                           example: The Redeemed Christian Church of God
 *                         churchNameAbbr:
 *                           type: string
 *                           example: RCCG
 *                         authorizedName:
 *                           type: string
 *                           example: Pastor Matthew
 *                         email:
 *                           type: string
 *                           example: matt@gmail.com
 *                         phone:
 *                           type: string
 *                           example: +1(201)566734
 *                         address:
 *                           type: string
 *                           example: 5, Oakwood Street, Brooklyn, NY
 *                         fax:
 *                           type: string
 *                           example: null
 *                         website:
 *                           type: string
 *                           example: rccg.com
 *                         remittancePercentage:
 *                           type: number
 *                           example: 5
 *                         logo:
 *                           type: string
 *                           example: https://server.com/path
 *                         signature:
 *                           type: string
 *                           example: https://server.com/path
 *                         financialStatement:
 *                           type: string
 *                           example: https://server.com/path
 *                         profileImageUrl:
 *                           type: string
 *                           example: null
 *                         subscriptionValid:
 *                           type: boolean
 *                           example: true
 *                         subscriptionExpiresAt:
 *                           type: Date
 *                           example: 9/12/2024
 *                         availableSmsUnits:
 *                           type: number
 *                           example: 0
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
router.patch("", auth, isParishAdmin, edit);

export default router;
