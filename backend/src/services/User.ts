import ParishAdminRepo from "../database/repositories/ParishAdminRepo";
import AdminRepo from "../database/repositories/AdminRepo";
import { IAdminModel } from "../database/models/Admin";
import { IParishAdminModel } from "../database/models/ParishAdmin";
import { IRepository } from "../types";
import { comparePasswordWithHash, hashPassword } from "../utils/password";

const userTypeMap: { [key: string]: IRepository } = {
  pa: ParishAdminRepo,
  admin: AdminRepo,
};

export default class {
  static async getUserByEmail(
    email: string,
    userType: string,
  ): Promise<IParishAdminModel | IAdminModel | null> {
    try {
      const repo = userTypeMap[userType];

      if (!repo.getByEmail) {
        return null;
      }

      const user = await repo.getByEmail(email);

      return user ? user.dataValues : null;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id: number, userType: string) {
    try {
      const repo = userTypeMap[userType];

      const user = await repo.getByID(id);

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
  ): Promise<boolean> {
    try {
      const user = await this.getUserByEmail(email, userType);

      if (!user) {
        return false;
      }

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

      const userValid = await comparePasswordWithHash(
        userDetails.password,
        user.passwordHash,
      );

      return { ...user, userValid };
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
}
