import Joi from "joi";

export const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const CreateAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  dob: Joi.date().required(),
  phone: Joi.string(),
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
