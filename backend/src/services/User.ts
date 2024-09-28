import ParishAdminRepo from "../database/repositories/ParishAdminRepo";
import AdminRepo from "../database/repositories/AdminRepo";
import MemberRepo from "../database/repositories/MemberRepo";

import { IAdminModel } from "../database/models/Admin";
import { IParishAdminModel } from "../database/models/ParishAdmin";
import { IChurchMemberModel } from "../database/models/ChurchMember";

import { IRepository } from "../types";
import { MemberDto, AdminDto, ParishAdminDto } from "../dtos/user";
import {
  comparePasswordWithHash,
  hashPassword,
  generatePassword,
} from "../utils/password";

const userTypeMap: { [key: string]: IRepository } = {
  pa: ParishAdminRepo as IRepository,
  admin: AdminRepo as IRepository,
  member: MemberRepo as IRepository,
};

export default class {
  static async getUserByEmail(
    email: string,
    userType: string,
  ): Promise<ParishAdminDto | AdminDto | MemberDto | null> {
    try {
      const repo = userTypeMap[userType];

      if (!repo.getByEmail) {
        return null;
      }

      const user = (await repo.getByEmail(email)) as
        | ParishAdminDto
        | AdminDto
        | MemberDto;

      return user ? user : null;
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(
    id: number,
    userType: string,
  ): Promise<ParishAdminDto | AdminDto | MemberDto | null> {
    try {
      const repo = userTypeMap[userType];

      const user = (await repo.getByID(id)) as
        | ParishAdminDto
        | AdminDto
        | MemberDto;

      return user ? user : null;
    } catch (err) {
      throw err;
    }
  }

  static async userExistsWithEmail(
    email: string,
    userType: string,
  ): Promise<boolean> {
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

      return await comparePasswordWithHash(password, user.passwordHash!);
    } catch (err) {
      throw err;
    }
  }

  static async loginUser(
    userDetails: { email: string; password: string },
    userType: string,
  ): Promise<MemberDto | ParishAdminDto | AdminDto | null> {
    try {
      let user = (await this.getUserByEmail(userDetails.email, userType)) as
        | IParishAdminModel
        | IChurchMemberModel
        | IAdminModel;

      if (!user) {
        return user;
      }

      const userValid = await comparePasswordWithHash(
        userDetails.password,
        user.passwordHash,
      );

      return { ...user, userValid } as MemberDto | ParishAdminDto | AdminDto;
    } catch (err) {
      throw err;
    }
  }

  static async createNewUser(
    userDetails: MemberDto | AdminDto | ParishAdminDto,
    userType: string,
  ): Promise<AdminDto | MemberDto | ParishAdminDto> {
    try {
      const repo = userTypeMap[userType];
      let passwordHash;

      if (userType === "member") {
        const password = generatePassword(8);
        passwordHash = await hashPassword(password);
        console.log(password);
      } else {
        passwordHash = await hashPassword(userDetails.password!);
      }
      userDetails.passwordHash = passwordHash;
      userDetails.password = undefined;

      const user = await repo.create(
        userDetails as IParishAdminModel | IAdminModel | IChurchMemberModel,
      );

      return user as MemberDto | ParishAdminDto | AdminDto;
    } catch (err) {
      throw err;
    }
  }

  static async updateUserByID(
    userID: number,
    updateDetails: Partial<AdminDto | MemberDto | ParishAdminDto>,
    userType: string,
  ): Promise<AdminDto | MemberDto | ParishAdminDto> {
    try {
      const repo = userTypeMap[userType];

      const updatedUser = await repo.updateByID(userID, updateDetails);

      return updatedUser as MemberDto | ParishAdminDto | AdminDto;
    } catch (err) {
      throw err;
    }
  }
}
