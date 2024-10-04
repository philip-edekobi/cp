import { Request, Response } from "express";
import ProgramService from "../services/Program";
import { CreateProgramSchema, EditProgramSchema } from "../validations/program";
import { ByParishAdminQuery } from "../validations/query";
import { errResp, httpResp } from "../utils/http";
import { ProgramDto } from "../dtos/program";

export const newProgram = async (req: Request, res: Response) => {
  try {
    const { error } = CreateProgramSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const program = await ProgramService.createProgram(<ProgramDto>req.body);

    return httpResp(201, { program }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allPrograms = async (_: Request, res: Response) => {
  try {
    const programs = await ProgramService.getAllPrograms();

    return httpResp(200, { programs }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allProgramsForParish = async (req: Request, res: Response) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const programs = await ProgramService.getAllProgramsByParishAdmin({
      parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
    });

    return httpResp(200, { programs }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const getOneProgram = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const program = await ProgramService.getProgramByID(id);

    if (!program) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { program }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const editProgram = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const { error } = EditProgramSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const program = await ProgramService.editProgramByID(
      id,
      <Partial<ProgramDto>>req.body,
    );

    return httpResp(200, { program }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const deleteProgram = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    await ProgramService.deleteProgramByID(id);

    return res.sendStatus(200);
  } catch (err) {
    return errResp(500, err, res);
  }
};
