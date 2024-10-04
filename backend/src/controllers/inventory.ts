import { Request, Response } from "express";
import InventoryService from "../services/Inventory";
import {
  CreateInventoryAssetSchema,
  CreateInventoryCategorySchema,
  EditInventoryAssetSchema,
  EditInventoryCategorySchema,
} from "../validations/inventory";
import { ByParishAdminQuery } from "../validations/query";
import { errResp, httpResp } from "../utils/http";
import { AssetDto, InventoryCategoryDto } from "../dtos/inventory";

export const newInventoryCategory = async (req: Request, res: Response) => {
  try {
    const { error } = CreateInventoryCategorySchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const category = await InventoryService.createInventoryCategory(
      <InventoryCategoryDto>req.body,
    );

    return httpResp(201, { category }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allInventoryCategories = async (_: Request, res: Response) => {
  try {
    const categories = await InventoryService.getAllInventoryCategories();

    return httpResp(200, { categories }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const allInventoryCategoriesForParishAdmin = async (
  req: Request,
  res: Response,
) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const categories =
      await InventoryService.getAllInventoryCategoriesByParishAdmin({
        parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
      });

    return httpResp(200, { categories }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const inventoryCategoryByID = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const category = await InventoryService.getInventoryCategoryByID(id);

    if (!category) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { category }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const editInventoryCategory = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const { error } = EditInventoryCategorySchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const category = await InventoryService.editInventoryCategoryByID(
      id,
      <Partial<InventoryCategoryDto>>req.body,
    );

    return httpResp(200, { category }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const deleteInventoryCategory = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    await InventoryService.deleteInventoryCategoryByID(id);

    res.sendStatus(200);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const addAssetToInventory = async (req: Request, res: Response) => {
  try {
    const { error } = CreateInventoryAssetSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const asset = await InventoryService.createAsset(<AssetDto>req.body);

    return httpResp(201, { asset }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const getParishInventory = async (req: Request, res: Response) => {
  try {
    const { error } = ByParishAdminQuery.validate(req.query);
    if (error) {
      return errResp(400, error, res);
    }

    const inventory = await InventoryService.getInventoryByParishAdmin({
      parishAdminID: parseInt(<string>req.query.parishAdminID, 10),
    });

    return httpResp(200, { inventory }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const getAsset = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const asset = await InventoryService.getAssetByID(id);

    if (!asset) {
      return errResp(404, { message: "not found" }, res);
    }

    return httpResp(200, { asset }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const editAsset = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    const { error } = EditInventoryAssetSchema.validate(req.body);
    if (error) {
      return errResp(400, error, res);
    }

    const asset = await InventoryService.editAssetByID(
      id,
      <Partial<AssetDto>>req.body,
    );

    return httpResp(200, { asset }, res);
  } catch (err) {
    return errResp(500, err, res);
  }
};

export const deleteAsset = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return errResp(400, { message: "id param required" }, res);
    }

    const id = parseInt(req.params.id, 10);

    await InventoryService.deleteAssetByID(id);

    res.sendStatus(200);
  } catch (err) {
    return errResp(500, err, res);
  }
};
