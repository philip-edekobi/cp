import { Request, Response } from "express";
import InventoryService from "../services/Inventory";
import { ByParishAdminQuery } from "../validations/query";
import { errResp, httpResp } from "../utils/http";
import { AssetDto, InventoryCategoryDto } from "../dtos/inventory";
