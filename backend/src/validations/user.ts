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

export const CreateAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  dob: Joi.date().required(),
  phone: Joi.string(),
  surname: Joi.string().required(),
  othernames: Joi.string().required(),
});

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
