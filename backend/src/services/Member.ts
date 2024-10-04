import MemberRepo from "../database/repositories/MemberRepo";
import { IChurchMemberModel } from "../database/models/ChurchMember";
import { MemberDto } from "../dtos/user";
import { WhereParishAdminClause } from "../types";

export default class {
  static async getAllMembers(): Promise<MemberDto[]> {
    try {
      const members = await MemberRepo.getAll();

      return members as MemberDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getAllMembersByParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<MemberDto[]> {
    try {
      const members = await MemberRepo.getByClause(clause);

      return members as MemberDto[];
    } catch (err) {
      throw err;
    }
  }

  static async deleteMemberByID(id: number) {
    try {
      await MemberRepo.deleteByID(id);
    } catch (err) {
      throw err;
    }
  }
}
