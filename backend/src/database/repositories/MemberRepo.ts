import { IChurchMemberModel } from "../models/ChurchMember";
import { models } from "../initDB";

const { ChurchMember } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IChurchMemberModel[]> {
    try {
      const admins = await ChurchMember.findAll({
        attributes: publicAttributes,
      });

      return admins;
    } catch (err) {
      throw err;
    }
  }
  static async getByID(id: number): Promise<IChurchMemberModel | null> {
    try {
      const admin = await ChurchMember.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async getByEmail(email: string): Promise<IChurchMemberModel | null> {
    try {
      const admin = await ChurchMember.findOne({
        where: { email },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IChurchMemberModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const admins = await ChurchMember.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return admins as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IChurchMemberModel,
  ): Promise<IChurchMemberModel> {
    try {
      const newChurchMember = await ChurchMember.create({ ...details });

      return newChurchMember;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IChurchMemberModel>,
  ): Promise<IChurchMemberModel | null> {
    try {
      const newChurchMember = await ChurchMember.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newChurchMember[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ChurchMember.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
