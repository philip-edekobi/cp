import Joi from "joi";

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginSchema:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: JoshDon@example.com
 *         password:
 *           type: string
 *           default: mypassword
 */
export const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateAdminSchema:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - dob
 *         - surname
 *         - othernames
 *       properties:
 *         email:
 *           type: string
 *           default: JoshDon@example.com
 *         password:
 *           type: string
 *           default: mypassword
 *         dob:
 *           type: string
 *           default: "03/14/2024"
 *         phone:
 *           type: string
 *           default: +1201904577
 *         surname:
 *           type: string
 *           default: Martin
 *         othernames:
 *           type: string
 *           default: Julie Gwen
 */
export const CreateAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  dob: Joi.date().required(),
  phone: Joi.string(),
  surname: Joi.string().required(),
  othernames: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateParishAdminSchema:
 *       type: object
 *       required:
 *         - churchName
 *         - authorizedName
 *         - email
 *         - password
 *         - address
 *         - remittancePercentage
 *       properties:
 *         churchName:
 *           type: string
 *           default: Deeper Life Ministries
 *         churchNameAbbr:
 *           type: string
 *           default: null
 *         authorizedName:
 *           type: string
 *           default: Pastor Joshua
 *         email:
 *           type: string
 *           default: JoshDon@example.com
 *         password:
 *           type: string
 *           default: mypassword
 *         phone:
 *           type: string
 *           default: +1201904577
 *         address:
 *           type: string
 *           default: 6, Unity Isle
 *         fax:
 *           type: string
 *           default: null
 *         website:
 *           type: string
 *           default: deeperlife.com
 *         remittancePercentage:
 *           type: number
 *           default: 5
 */
export const CreateParishAdminSchema = Joi.object({
  churchName: Joi.string().required(),
  churchNameAbbr: Joi.string(),
  authorizedName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string(),
  address: Joi.string().required(),
  fax: Joi.string(),
  website: Joi.string(),
  remittancePercentage: Joi.number().required(),
  // logo: Joi.string().required(),
  // signature: Joi.string().required(),
  // financialStatement: Joi.string().required(),
});

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateMemberSchema:
 *       type: object
 *       required:
 *         - parishAdminID
 *         - surname
 *         - othernames
 *         - designation
 *         - gender
 *         - ageCategory
 *         - email
 *         - isBornAgain
 *         - hasCompletedSchoolOfDiscipleship
 *         - hasCompletedBelieversClass
 *         - isWaterBaptised
 *       properties:
 *         parishAdminID:
 *           type: number
 *           default: 3
 *         surname:
 *           type: string
 *           default: Don
 *         othernames:
 *           type: string
 *           default: Joshua
 *         title:
 *           type: string
 *           default: Pastor
 *         designation:
 *           type: string
 *           default: Area Pastor
 *         homeAddress:
 *           type: string
 *           default: 25, Brooks Ave, Manhattan
 *         gender:
 *           type: string
 *           default: Male
 *         ageCategory:
 *           type: string
 *           default: Adult
 *         phone:
 *           type: string
 *           default: +1(201)904577
 *         email:
 *           type: string
 *           default: JoshDon@example.com
 *         dateJoined:
 *           type: Date
 *           default: 09/21/2024
 *         dob:
 *           type: Date
 *           default: 09/21/2004
 *         weddingAnniversary:
 *           type: Date
 *           default: 09/21/2021
 *         department:
 *           type: string
 *           default: Protocol Department
 *         fellowship:
 *           type: string
 *           default: null
 *         occupation:
 *           type: string
 *           default: Programmer
 *         employer:
 *           type: string
 *           default: Bloomberg
 *         officeAddress:
 *           type: string
 *           default: null
 *         isBornAgain:
 *           type: boolean
 *           default: true
 *         yearBornAgain:
 *           type: number
 *           default: 2009
 *         hasCompletedBelieversClass:
 *           type: boolean
 *           default: true
 *         yearCompletedBelieversClass:
 *           type: number
 *           default: 2011
 *         isWaterBaptised:
 *           type: boolean
 *           default: false
 *         yearWaterBaptised:
 *           type: number
 *           default: null
 *         hasCompletedSchoolOfDiscipleship:
 *           type: boolean
 *           default: true
 *         yearCompletedSchoolOfDiscipleship:
 *           type: number
 *           default: 2009
 */
export const CreateMemberSchema = Joi.object({
  parishAdminID: Joi.number().required(),
  surname: Joi.string().required(),
  othernames: Joi.string().required(),
  title: Joi.string(),
  designation: Joi.string().required(),
  homeAddress: Joi.string(),
  gender: Joi.string().required(),
  ageCategory: Joi.string().required(),
  phone: Joi.string(),
  email: Joi.string().required(),
  dateJoined: Joi.date(),
  dob: Joi.date(),
  weddingAnniversary: Joi.date(),
  department: Joi.string(),
  fellowship: Joi.string(),
  occupation: Joi.string(),
  employer: Joi.string(),
  officeAddress: Joi.string(),
  isBornAgain: Joi.boolean().required(),
  yearBornAgain: Joi.number(),
  hasCompletedBelieversClass: Joi.boolean().required(),
  yearCompletedBelieversClass: Joi.number(),
  isWaterBaptised: Joi.boolean().required(),
  yearWaterBaptised: Joi.number(),
  hasCompletedSchoolOfDiscipleship: Joi.boolean().required(),
  yearCompletedSchoolOfDiscipleship: Joi.number(),
});
