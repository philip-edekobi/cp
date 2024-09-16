import { Model } from "sequelize";
import { IAdminModel } from "../models/Admin";

const {
  models: { Admin },
} = require("../initDB");

const publicAttributes = { exclude: [] };

module.exports = class {
  static async getAll() {
    try {
      const admins: Model[] = await Admin.findAll({
        attributes: publicAttributes,
      });

      return admins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: string) {
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

  static async getByEmail(email: string) {
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

  static async create(details: Partial<IAdminModel>) {
    try {
      const newAdmin = await Admin.create({ ...details });

      return newAdmin;
    } catch (err) {
      throw err;
    }
  }
};
