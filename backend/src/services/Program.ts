import ProgramRepo from "../database/repositories/ProgramRepo";
import { IParishProgramModel } from "../database/models/Program";
import { WhereParishAdminClause } from "../types";
import { ProgramDto } from "../dtos/program";

export default class {
  static async getAllPrograms(): Promise<ProgramDto[]> {
    try {
      const programs = await ProgramRepo.getAll();

      return programs as ProgramDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getAllProgramsByParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<ProgramDto[]> {
    try {
      const programs = await ProgramRepo.getByClause(clause);

      return programs as ProgramDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getProgramByID(id: number): Promise<ProgramDto> {
    try {
      const program = await ProgramRepo.getByID(id);

      return program as ProgramDto;
    } catch (err) {
      throw err;
    }
  }

  static async createProgram(details: ProgramDto): Promise<ProgramDto> {
    try {
      const program = await ProgramRepo.create(details as IParishProgramModel);

      return program as ProgramDto;
    } catch (err) {
      throw err;
    }
  }

  static async editProgramByID(
    id: number,
    editDetails: Partial<ProgramDto>,
  ): Promise<ProgramDto> {
    try {
      const program = await ProgramRepo.updateByID(
        id,
        editDetails as Partial<IParishProgramModel>,
      );

      return program as ProgramDto;
    } catch (err) {
      throw err;
    }
  }

  static async deleteProgramByID(id: number) {
    try {
      await ProgramRepo.deleteByID(id);
    } catch (err) {
      throw err;
    }
  }
}
