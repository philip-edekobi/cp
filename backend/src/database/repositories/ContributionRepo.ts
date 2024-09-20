import { IParishContributionModel } from "../models/Contribution";
import { models } from "../initDB";

const { ParishContribution } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishContributionModel[]> {
    try {
      const admins = await ParishContribution.findAll({
        attributes: publicAttributes,
      });

      return admins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IParishContributionModel | null> {
    try {
      const admin = await ParishContribution.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async getByEmail(
    email: string,
  ): Promise<IParishContributionModel | null> {
    try {
      const admin = await ParishContribution.findOne({
        where: { email },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishContributionModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const admins = await ParishContribution.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return admins as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishContributionModel,
  ): Promise<IParishContributionModel> {
    try {
      const newParishContribution = await ParishContribution.create({
        ...details,
      });

      return newParishContribution;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishContributionModel>,
  ): Promise<IParishContributionModel | null> {
    try {
      const newParishContribution = await ParishContribution.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newParishContribution[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishContribution.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
