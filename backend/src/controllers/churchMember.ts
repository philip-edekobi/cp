import { Request, Response } from "express";
import UserService from "../services/User";
import MemberService from "../services/Member";
import { errResp, httpResp } from "../utils/http";
import {
  CreateMemberSchema,
  LoginSchema,
  EditMemberSchema,
} from "../validations/user";
import { ByParishAdminQuery } from "../validations/query";
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

export const edit = async (req: Request, res: Response) => {
  try {
    const { error } = EditMemberSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const user = await UserService.updateUserByID(
      req.user!.id!,
      <MemberDto>req.body,
      USERTYPE,
    );

    return httpResp(200, { user }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const getAllMembersByParishAdmin = async (
  req: Request,
  res: Response,
) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const members = await MemberService.getAllMembersByParishAdmin({
      parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
    });

    return httpResp(200, { members }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const getOneMember = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const member = await UserService.getUserById(id, USERTYPE);

    if (!member) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { member }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};
