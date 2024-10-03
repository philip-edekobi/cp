import { Request, Response, NextFunction } from "express";
import { errResp, unAuthResp } from "../utils/http";
import { verifyToken } from "../utils/token";
import { AdminDto, MemberDto, ParishAdminDto } from "../dtos/user";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // if (req.isAuthenticated()) {
    //   return next();
    // } else if (req.session?.token) {
    //   const payload = verifyToken(req.session?.token?.token);
    //   req.user = payload;
    //
    //   return next();
    // } else {
    const authHeader = req.headers["authorization"];

    if (authHeader !== "" && authHeader !== undefined) {
      const bearer = authHeader.split(" ");
      const token = bearer[1];

      const payload = verifyToken(token);
      req.user = payload as MemberDto | AdminDto | ParishAdminDto;

      return next();
    }
    // }
    return unAuthResp(res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.user!.userType && req.user!.userType === "admin") {
      return next();
    }

    return unAuthResp(res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const isMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.user!.userType && req.user!.userType === "member") {
      return next();
    }

    return unAuthResp(res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const isParishAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (req.user!.userType && req.user!.userType === "pa") {
      return next();
    }

    return unAuthResp(res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const isMultiple = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const verifyRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // if (req.session?.token) {
    //   const payload = verifyToken(req.session?.token?.refreshToken);
    //
    //   req.user = payload;
    //
    //   return next();
    // } else {
    const refreshToken = req.body.refreshToken;

    const payload = verifyToken(refreshToken);
    req.user = payload as MemberDto | AdminDto | ParishAdminDto;

    return next();
    // }
  } catch (err) {
    return errResp(500, err, res);
  }
};
