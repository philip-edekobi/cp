import InventoryRepo from "../database/repositories/InventoryRepo";
import InventoryCategoryRepo from "../database/repositories/InventoryCategoryRepo";
import { WhereParishAdminClause } from "../types";
import { AssetDto, InventoryCategoryDto } from "../dtos/inventory";
import { IParishInventoryModel } from "../database/models/Inventory";
import { IParishInventoryCategoryModel } from "../database/models/InventoryCategory";

export default class {
  static async getInventoryByParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<AssetDto[]> {
    try {
      const inventory = await InventoryRepo.getByClause(clause);

      return inventory as AssetDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getAssetByID(id: number): Promise<AssetDto> {
    try {
      const asset = await InventoryRepo.getByID(id);

      return asset as AssetDto;
    } catch (err) {
      throw err;
    }
  }

  static async editAssetByID(
    id: number,
    editDetails: Partial<AssetDto>,
  ): Promise<AssetDto> {
    try {
      const asset = await InventoryRepo.updateByID(
        id,
        editDetails as Partial<IParishInventoryModel>,
      );

      return asset as AssetDto;
    } catch (err) {
      throw err;
    }
  }

  static async createAsset(details: AssetDto): Promise<AssetDto> {
    try {
      const asset = await InventoryRepo.create(
        details as IParishInventoryModel,
      );

      return asset as AssetDto;
    } catch (err) {
      throw err;
    }
  }

  static async deleteAssetByID(id: number): Promise<void> {
    try {
      await InventoryRepo.deleteByID(id);
    } catch (err) {
      throw err;
    }
  }

  static async getAllInventoryCategories(): Promise<InventoryCategoryDto[]> {
    try {
      const categories = await InventoryCategoryRepo.getAll();

      return categories as InventoryCategoryDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getAllInventoryCategoriesByParishAdmin(
    clause: WhereParishAdminClause,
  ): Promise<InventoryCategoryDto[]> {
    try {
      const categories = await InventoryCategoryRepo.getByClause(clause);

      return categories as InventoryCategoryDto[];
    } catch (err) {
      throw err;
    }
  }

  static async getInventoryCategoryByID(
    id: number,
  ): Promise<InventoryCategoryDto> {
    try {
      const category = await InventoryCategoryRepo.getByID(id);

      return category as InventoryCategoryDto;
    } catch (err) {
      throw err;
    }
  }

  static async createInventoryCategory(
    details: InventoryCategoryDto,
  ): Promise<InventoryCategoryDto> {
    try {
      const category = await InventoryCategoryRepo.create(
        details as IParishInventoryCategoryModel,
      );

      return category as InventoryCategoryDto;
    } catch (err) {
      throw err;
    }
  }

  static async editInventoryCategoryByID(
    id: number,
    editDetails: Partial<InventoryCategoryDto>,
  ): Promise<InventoryCategoryDto> {
    try {
      const category = await InventoryCategoryRepo.updateByID(
        id,
        editDetails as Partial<IParishInventoryCategoryModel>,
      );

      return category as InventoryCategoryDto;
    } catch (err) {
      throw err;
    }
  }

  static async deleteInventoryCategoryByID(id: number) {
    try {
      await InventoryCategoryRepo.deleteByID(id);
    } catch (err) {
      throw err;
    }
  }
}
