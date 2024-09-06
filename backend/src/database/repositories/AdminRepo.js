const {
  models: { Admin },
} = require("../initDB");

const publicAttributes = { exclude: [] };

module.exports = class {
  static async getAll() {
    try {
      const admins = await Admin.findAll({
        attributes: publicAttributes,
      });

      return admins;
    } catch (err) {
      throw err;
    }
  }

  static async getByID(id) {
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

  static async getByEmail(email) {
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

  static async create(details) {
    try {
      const newAdmin = await Admin.create({ ...details });

      return newAdmin;
    } catch (err) {
      throw err;
    }
  }
};
