import { IParishAttendanceModel } from "../models/Attendance";
import { models } from "../initDB";

const { ParishAttendance } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishAttendanceModel[]> {
    try {
      const attendance = await ParishAttendance.findAll({
        attributes: publicAttributes,
      });

      return attendance;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IParishAttendanceModel | null> {
    try {
      const pat = await ParishAttendance.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return pat;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishAttendanceModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const attendance = await ParishAttendance.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return attendance as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishAttendanceModel,
  ): Promise<IParishAttendanceModel> {
    try {
      const newAttendance = await ParishAttendance.create({ ...details });

      return newAttendance;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishAttendanceModel>,
  ): Promise<IParishAttendanceModel | null> {
    try {
      const newPat = await ParishAttendance.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newPat[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishAttendance.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
