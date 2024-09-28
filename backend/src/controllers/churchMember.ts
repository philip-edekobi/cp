import { Request, Response } from "express";
import UserService from "../services/User";
import { errResp, httpResp } from "../utils/http";
import { CreateMemberSchema, LoginSchema } from "../validations/user";
import { generateToken } from "../utils/token";
import { MemberDto } from "../dtos/user";

const USERTYPE = "member";

export const newMember = async (req: Request, res: Response) => {
  try {
    const { error } = CreateMemberSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const customer = await UserService.createNewUser(req.body, USERTYPE);

    return httpResp(201, { user: customer }, res);
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

    const user = (await UserService.loginUser(req.body, USERTYPE)) as MemberDto;

    if (!user) return errResp(404, { message: "User not Found" }, res);

    if (!user?.userValid) {
      return errResp(400, { message: "incorrect password" }, res);
    }

    const token = generateToken({
      userType: USERTYPE,
      ...user,
    });

    return httpResp(200, { token }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};
