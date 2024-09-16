import { Request, Response } from "express";
const UserService = require("../services/User");
const { errResp, httpResp } = require("../utils/http");
const { CreateParishAdminSchema, LoginSchema } = require("../validations");
const { generateToken } = require("../utils/token");

const USERTYPE = "pa";

module.exports.newParishAdmin = async (req: Request, res: Response) => {
  try {
    const { error } = CreateParishAdminSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const customer = await UserService.createNewUser(req.body, USERTYPE);
    customer.passwordHash = undefined;

    return httpResp(201, { user: customer }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

module.exports.login = async (req: Request, res: Response) => {
  try {
    const { error } = LoginSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const user = await UserService.loginUser(req.body, USERTYPE);

    if (!user) return errResp(404, { message: "User not Found" }, res);

    if (!user?.userValid) {
      return errResp(404, { message: "user not found" }, res);
    }

    const token = generateToken({
      userType: USERTYPE,
      ...user,
    });

    // req.session.token = token;

    return httpResp(200, { token }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};
