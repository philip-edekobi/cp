import { Model } from "sequelize";
import { IParishAdminModel } from "../models/ParishAdmin";

const {
  models: { ParishAdmin },
} = require("../initDB");

const publicAttributes = { exclude: [] };

module.exports = class {
  static async getAll() {
    try {
      const parishAdmins = await ParishAdmin.findAll({
        attributes: publicAttributes,
      });

      return parishAdmins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id: number) {
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

  static async getByEmail(email: string) {
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

  static async create(details: Partial<IParishAdminModel>) {
    try {
      const newPa = await ParishAdmin.create({ ...details });

      return newPa;
    } catch (err) {
      throw err;
    }
  }
};
