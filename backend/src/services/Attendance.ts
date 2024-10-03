import AttendanceRepo from "../database/repositories/AttendanceRepo";
import { IParishAttendanceModel } from "../database/models/Attendance";
import { WhereParishAdminClause } from "../types";
import { AttendanceDto } from "../dtos/attendance";

export default class {
  static async getAttendanceByParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<AttendanceDto[]> {
    try {
      const attendance = await AttendanceRepo.getByClause(clause);

      return attendance as AttendanceDto[];
    } catch (err) {
      throw err;
    }
  }

  static async createAttendance(
    details: AttendanceDto,
  ): Promise<AttendanceDto> {
    try {
      const attendance = await AttendanceRepo.create(
        details as IParishAttendanceModel,
      );

      return attendance as AttendanceDto;
    } catch (err) {
      throw err;
    }
  }

  static async getAttendanceByID(id: number): Promise<AttendanceDto> {
    try {
      const attendance = await AttendanceRepo.getByID(id);

      return attendance as AttendanceDto;
    } catch (err) {
      throw err;
    }
  }

  static async editAttendanceByID(
    id: number,
    editDetails: Partial<AttendanceDto>,
  ): Promise<AttendanceDto> {
    try {
      const attendance = await AttendanceRepo.updateByID(
        id,
        editDetails as Partial<IParishAttendanceModel>,
      );

      return attendance as AttendanceDto;
    } catch (err) {
      throw err;
    }
  }

  static async deleteAttendanceByID(id: number) {
    try {
      await AttendanceRepo.deleteByID(id);
    } catch (err) {
      throw err;
    }
  }
}
