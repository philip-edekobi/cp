import { IParishInventoryModel } from "../models/Inventory";
import { models } from "../initDB";

const { ParishInventory } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishInventoryModel[]> {
    try {
      const inventories = await ParishInventory.findAll({
        attributes: publicAttributes,
      });

      return inventories;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IParishInventoryModel | null> {
    try {
      const asset = await ParishInventory.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return asset;
    } catch (err) {
      throw err;
    }
  }

  static async getByClause<T extends IParishInventoryModel>(
    clause: Partial<T>,
  ): Promise<T[] | null> {
    try {
      const inventory = await ParishInventory.findAll({
        where: { ...clause },
        attributes: publicAttributes,
      });

      return inventory as T[];
    } catch (err) {
      throw err;
    }
  }

  static async create(
    details: IParishInventoryModel,
  ): Promise<IParishInventoryModel> {
    try {
      const newParishInventory = await ParishInventory.create({
        ...details,
      });

      return newParishInventory;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishInventoryModel>,
  ): Promise<IParishInventoryModel | null> {
    try {
      const newParishInventory = await ParishInventory.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newParishInventory[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishInventory.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
