import { Request, Response } from "express";
import UserService from "../services/User";
import { errResp, httpResp } from "../utils/http";
import { LoginSchema, CreateParishAdminSchema } from "../validations/user";
import { generateToken } from "../utils/token";
import { ParishAdminDto } from "../dtos/user";

const USERTYPE = "pa";

export const newParishAdmin = async (req: Request, res: Response) => {
  try {
    const { error } = CreateParishAdminSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const user = await UserService.createNewUser(req.body, USERTYPE);

    return httpResp(201, { user }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { error } = LoginSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const user = (await UserService.loginUser(
      req.body,
      USERTYPE,
    )) as ParishAdminDto;

    if (!user) return errResp(404, { message: "User not Found" }, res);

    if (!user?.userValid) {
      return errResp(400, { message: "incorrect password" }, res);
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
