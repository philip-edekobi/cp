import { IParishInventoryCategoryModel } from "../models/InventoryCategory";
import { models } from "../initDB";

const { ParishInventoryCategory } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishInventoryCategoryModel[]> {
    try {
      const categories = await ParishInventoryCategory.findAll({
        attributes: publicAttributes,
      });

      return categories;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(
    id: number,
  ): Promise<IParishInventoryCategoryModel | null> {
    try {
      const category = await ParishInventoryCategory.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return category;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishInventoryCategoryModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const categories = await ParishInventoryCategory.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return categories as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishInventoryCategoryModel,
  ): Promise<IParishInventoryCategoryModel> {
    try {
      const newParishInventoryCategory = await ParishInventoryCategory.create({
        ...details,
      });

      return newParishInventoryCategory;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishInventoryCategoryModel>,
  ): Promise<IParishInventoryCategoryModel | null> {
    try {
      const newParishInventoryCategory = await ParishInventoryCategory.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newParishInventoryCategory[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishInventoryCategory.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
