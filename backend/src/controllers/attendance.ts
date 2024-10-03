import { Request, Response } from "express";
import AttendanceService from "../services/Attendance";
import {
  CreateAttendanceSchema,
  EditAttendanceSchema,
} from "../validations/attendance";
import { ByParishAdminQuery } from "../validations/query";
import { errResp, httpResp } from "../utils/http";
import { AttendanceDto } from "../dtos/attendance";

export const newAttendance = async (req: Request, res: Response) => {
  try {
    const { error } = CreateAttendanceSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const attendance = await AttendanceService.createAttendance(
      <AttendanceDto>req.body,
    );

    return httpResp(201, { attendance }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allAttendanceForParish = async (req: Request, res: Response) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const attendances = await AttendanceService.getAttendanceByParishAdmin({
      parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
    });

    return httpResp(200, { attendances }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const getOneAttendance = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const attendance = await AttendanceService.getAttendanceByID(id);

    if (!attendance) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { attendance }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const editAttendance = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const { error } = EditAttendanceSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const attendance = await AttendanceService.editAttendanceByID(
      id,
      <AttendanceDto>req.body,
    );

    return httpResp(200, { attendance }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};
