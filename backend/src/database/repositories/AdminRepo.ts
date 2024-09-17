import { IAdminModel } from "../models/Admin";
import { models } from "../initDB";

const { Admin } = models;

const publicAttributes = { exclude: [] };

export default class {
  static async getAll(): Promise<IAdminModel[]> {
    try {
      const admins = await Admin.findAll({
        attributes: publicAttributes,
      });

      return admins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number): Promise<IAdminModel | null> {
    try {
      const admin = await Admin.findOne({
        where: { id },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async getByEmail(email: string): Promise<IAdminModel | null> {
    try {
      const admin = await Admin.findOne({
        where: { email },
        attributes: publicAttributes,
      });

      return admin;
    } catch (err) {
      throw err;
    }
  }

  static async create(details: IAdminModel): Promise<IAdminModel> {
    try {
      const newAdmin = await Admin.create({ ...details });

      return newAdmin;
    } catch (err) {
      throw err;
    }
  }

  static async updateByID(
    id: number,
    updateDetails: Partial<IAdminModel>,
  ): Promise<IAdminModel | null> {
    try {
      const newAdmin = await Admin.update(
        { ...updateDetails },
        { where: { id }, returning: true },
      );

      return newAdmin[1][0];
    } catch (err) {
      throw err;
    }
  }

  static async deleteByID(id: number) {
    try {
      await Admin.destroy({
        where: { id },
      });
    } catch (err) {
      throw err;
    }
  }
}
