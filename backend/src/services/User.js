const ParishAdminRepo = require("../database/repositories/ParishAdminRepo");
const AdminRepo = require("../database/repositories/AdminRepo");
const { comparePasswordWithHash, hashPassword } = require("../utils/password");

const userTypeMap = {
  pa: ParishAdminRepo,
  admin: AdminRepo,
};

module.exports = class {
  static async getUserByEmail(email, userType) {
    try {
      repo = userTypeMap[userType];

      const user = await repo.getByEmail(email);

      return user ? user.dataValues : null;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id, userType) {
    try {
      repo = userTypeMap[userType];

      const user = await repo.getById(id);

      return user ? user.dataValues : null;
    } catch (err) {
      throw err;
    }
  }

  static async userExistsWithEmail(email, userType) {
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

  static async verifyUserPasswordByEmail(email, password, userType) {
    try {
      const user = await this.getUserByEmail(email, userType);

      return await comparePasswordWithHash(password, user.passwordHash);
    } catch (err) {
      throw err;
    }
  }

  static async loginUser(userDetails, userType) {
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

  static async createNewUser(userDetails, userType) {
    try {
      repo = userTypeMap[userType];

      const passwordHash = await hashPassword(userDetails.password);
      userDetails.passwordHash = passwordHash;
      userDetails.password = undefined;

      console.log(userType);
      const user = await repo.create(userDetails);

      return user;
    } catch (err) {
      throw err;
    }
  }
};
