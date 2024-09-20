import { IParishContributionTypeModel } from "../models/ContributionType";
import { models } from "../initDB";

const { ParishContributionType } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishContributionTypeModel[]> {
    try {
      const admins = await ParishContributionType.findAll({
        attributes: publicAttributes,
      });

      return admins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(
    id: number,
  ): Promise<IParishContributionTypeModel | null> {
    try {
      const admin = await ParishContributionType.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishContributionTypeModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const admins = await ParishContributionType.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return admins as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishContributionTypeModel,
  ): Promise<IParishContributionTypeModel> {
    try {
      const newParishContributionType = await ParishContributionType.create({
        ...details,
      });

      return newParishContributionType;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishContributionTypeModel>,
  ): Promise<IParishContributionTypeModel | null> {
    try {
      const newParishContributionType = await ParishContributionType.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newParishContributionType[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishContributionType.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
