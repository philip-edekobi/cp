import { Request, Response } from "express";
import ContributionService from "../services/Contribution";
import {
  CreateContributionSchema,
  CreateContributionTypeSchema,
  EditContributionSchema,
  EditContributionTypeSchema,
} from "../validations/contributions";
import { ByParishAdminQuery } from "../validations/query";
import { errResp, httpResp } from "../utils/http";
import { ContributionTypeDto, ContributionDto } from "../dtos/contribution";

export const newContribution = async (req: Request, res: Response) => {
  try {
    const { error } = CreateContributionSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const contribution = await ContributionService.createContribution(
      <ContributionDto>req.body,
    );

    return httpResp(201, { contribution }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allContributions = async (_: Request, res: Response) => {
  try {
    const contributions = await ContributionService.getAllContributions();

    return httpResp(200, { contributions }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allParishContributions = async (req: Request, res: Response) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const contributions =
      await ContributionService.getAllContributionsForParishAdmin({
        parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
      });

    return httpResp(200, { contributions }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const oneContribution = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const contribution = await ContributionService.getContributionByID(id);

    if (!contribution) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { contribution }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const editContribution = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const { error } = EditContributionSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const contribution = await ContributionService.editContributionByID(
      id,
      <Partial<ContributionDto>>req.body,
    );

    return httpResp(200, { contribution }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const newContributionType = async (req: Request, res: Response) => {
  try {
    const { error } = CreateContributionTypeSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const contributionType = await ContributionService.createContributionType(
      <ContributionTypeDto>req.body,
    );

    return httpResp(201, { contributionType }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allContributionTypes = async (_: Request, res: Response) => {
  try {
    const contributionTypes =
      await ContributionService.getAllContributionTypes();

    return httpResp(200, { contributionTypes }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const parishContributionTypes = async (req: Request, res: Response) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const contributionTypes =
      await ContributionService.getAllContributionTypesForParishAdmin({
        parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
      });

    return httpResp(200, { contributionTypes }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const oneContributionType = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const contributionType =
      await ContributionService.getContributionTypeByID(id);

    if (!contributionType) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { contributionType }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const editContributionType = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const { error } = EditContributionTypeSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const contributionType = await ContributionService.editContributionTypeByID(
      id,
      <Partial<ContributionTypeDto>>req.body,
    );

    return httpResp(200, { contributionType }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const deleteContributionType = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    await ContributionService.deleteContributionTypeByID(id);

    res.sendStatus(200);
  } catch (err) {
    return errResp(500, err, res);
  }
};
