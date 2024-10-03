import { Request, Response } from "express";
import ContributionService from "../services/Contribution";
import { ByParishAdminQuery } from "../validations/query";
import { errResp, httpResp } from "../utils/http";
import { ContributionTypeDto, ContributionDto } from "../dtos/contribution";

export const newContribution = async (req: Request, res: Response) {
}

export const newContributionType =async (req: Request, res: Response) {}
