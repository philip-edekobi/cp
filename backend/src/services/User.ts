const ParishAdminRepo = require("../database/repositories/ParishAdminRepo");
const AdminRepo = require("../database/repositories/AdminRepo");
const { comparePasswordWithHash, hashPassword } = require("../utils/password");
import { IRepository } from "../types";

const userTypeMap: { [key: string]: IRepository } = {
  pa: ParishAdminRepo,
  admin: AdminRepo,
};

module.exports = class {
  static async getUserByEmail(email: string, userType: string) {
    try {
      const repo = userTypeMap[userType];

      const user = await repo.getByEmail(email);

      return user ? user.dataValues : null;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id: number, userType: string) {
    try {
      const repo = userTypeMap[userType];

      const user = await repo.getById(id);

      return user ? user.dataValues : null;
    } catch (err) {
      throw err;
    }
  }

  static async userExistsWithEmail(email: string, userType: string) {
    try {
      const existing = await this.getUserByEmail(email, userType);

      if (!existing) {
        return false;
      }

      return true;
    } catch (err) {
      throw err;
    }
  }

  static async verifyUserPasswordByEmail(
    email: string,
    password: string,
    userType: string,
  ) {
    try {
      const user = await this.getUserByEmail(email, userType);

      return await comparePasswordWithHash(password, user.passwordHash);
    } catch (err) {
      throw err;
    }
  }

  static async loginUser(
    userDetails: { email: string; password: string },
    userType: string,
  ) {
    try {
      let user = await this.getUserByEmail(userDetails.email, userType);

      if (!user) {
        return user;
      }

      user.userValid = await comparePasswordWithHash(
        userDetails.password,
        user.passwordHash,
      );

      return user;
    } catch (err) {
      throw err;
    }
  }

  static async createNewUser(userDetails: any, userType: string) {
    try {
      const repo = userTypeMap[userType];

      const passwordHash = await hashPassword(userDetails.password);
      userDetails.passwordHash = passwordHash;
      userDetails.password = undefined;

      const user = await repo.create(userDetails);

      return user;
    } catch (err) {
      throw err;
    }
  }
};
