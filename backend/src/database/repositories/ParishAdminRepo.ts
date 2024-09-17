import { IParishAdminModel } from "../models/ParishAdmin";
import { models } from "../initDB";

const { ParishAdmin } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IParishAdminModel[]> {
    try {
      const parishAdmins = await ParishAdmin.findAll({
        attributes: publicAttributes,
      });

      return parishAdmins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IParishAdminModel | null> {
    try {
      const pa = await ParishAdmin.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return pa;
    } catch (err) {
      throw err;
    }
  }

  static async getByEmail(email: string): Promise<IParishAdminModel | null> {
    try {
      const pa = await ParishAdmin.findOne({
        where: { email },
        attributes: publicAttributes,
      });

      return pa;
    } catch (err) {
      throw err;
    }
  }

  static async create(details: IParishAdminModel): Promise<IParishAdminModel> {
    try {
      const newPa = await ParishAdmin.create({ ...details });

      return newPa;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IParishAdminModel>,
  ): Promise<IParishAdminModel | null> {
    try {
      const newPAdmin = await ParishAdmin.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newPAdmin[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await ParishAdmin.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
