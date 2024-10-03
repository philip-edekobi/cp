import { IParishProgramModel } from "../models/Program";
import { models } from "../initDB";

const { ParishProgram } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishProgramModel[]> {
    try {
      const programs = await ParishProgram.findAll({
        attributes: publicAttributes,
      });

      return programs;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IParishProgramModel | null> {
    try {
      const pp = await ParishProgram.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return pp;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishProgramModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const payments = await ParishProgram.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return payments as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishProgramModel,
  ): Promise<IParishProgramModel> {
    try {
      const newPp = await ParishProgram.create({ ...details });

      return newPp;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishProgramModel>,
  ): Promise<IParishProgramModel | null> {
    try {
      const newPp = await ParishProgram.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newPp[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishProgram.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
