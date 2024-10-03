import ContributionRepo from "../database/repositories/ContributionRepo";
import ContributionTypeRepo from "../database/repositories/ContributionTypeRepo";
import { ContributionDto, ContributionTypeDto } from "../dtos/contribution";
import { IParishContributionModel } from "../database/models/Contribution";
import { IParishContributionTypeModel } from "../database/models/ContributionType";
import { WhereParishAdminClause } from "../types";

export default class {
  static async getAllContributions(): Promise<ContributionDto[]> {
    try {
      const contributions = await ContributionRepo.getAll();

      return contributions as ContributionDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getAllContributionsForParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<ContributionDto[]> {
    try {
      const contributions = await ContributionRepo.getByClause(clause);

      return contributions as ContributionDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getContributionByID(id: number): Promise<ContributionDto> {
    try {
      const contribution = await ContributionRepo.getByID(id);

      return contribution as ContributionDto;
    } catch (err) {
      throw err;
    }
  }

  static async createContribution(
    details: ContributionDto,
  ): Promise<ContributionDto> {
    try {
      const contribution = await ContributionRepo.create(
        <IParishContributionModel>details,
      );

      return contribution as ContributionDto;
    } catch (err) {
      throw err;
    }
  }

  static async editContributionByID(
    id: number,
    editDetails: Partial<ContributionDto>,
  ): Promise<ContributionDto> {
    try {
      const contribution = await ContributionRepo.updateByID(
        id,
        editDetails as Partial<IParishContributionModel>,
      );
      return contribution as ContributionDto;
    } catch (err) {
      throw err;
    }
  }

  static async getAllContributionTypes(): Promise<ContributionTypeDto[]> {
    try {
      const contributionTypes = await ContributionTypeRepo.getAll();

      return contributionTypes as ContributionTypeDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getContributionTypeByID(
    id: number,
  ): Promise<ContributionTypeDto> {
    try {
      const contributionType = await ContributionTypeRepo.getByID(id);

      return contributionType as ContributionTypeDto;
    } catch (err) {
      throw err;
    }
  }

  static async getAllContributionTypesForParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<ContributionTypeDto[]> {
    try {
      const contributionTypes = await ContributionTypeRepo.getByClause(clause);

      return contributionTypes as ContributionTypeDto[];
    } catch (err) {
      throw err;
    }
  }

  static async createContributionType(
    details: ContributionTypeDto,
  ): Promise<ContributionTypeDto> {
    try {
      const contributionType = await ContributionTypeRepo.create(
        <IParishContributionTypeModel>details,
      );

      return contributionType as ContributionTypeDto;
    } catch (err) {
      throw err;
    }
  }

  static async editContributionTypeByID(
    id: number,
    editDetails: Partial<ContributionTypeDto>,
  ): Promise<ContributionTypeDto> {
    try {
      const contributionType = await ContributionTypeRepo.updateByID(
        id,
        editDetails as Partial<IParishContributionTypeModel>,
      );
      return contributionType as ContributionTypeDto;
    } catch (err) {
      throw err;
    }
  }

  static async deleteContributionTypeByID(id: number) {
    try {
      await ContributionTypeRepo.deleteByID(id);
    } catch (err) {
      throw err;
    }
  }
}
