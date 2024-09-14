const Joi = require("joi");

module.exports.LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports.CreateAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  dob: Joi.date().required(),
  phone: Joi.string(),
});

module.exports.CreateParishAdminSchema = Joi.object({
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
