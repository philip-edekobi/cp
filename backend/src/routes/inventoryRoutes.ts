import { Router } from "express";
import {
  addAssetToInventory,
  getAsset,
  getParishInventory,
  editAsset,
  deleteAsset,
  allInventoryCategories,
  allInventoryCategoriesForParishAdmin,
  newInventoryCategory,
  inventoryCategoryByID,
  editInventoryCategory,
  deleteInventoryCategory,
} from "../controllers/inventory";
import { auth, isAdmin, isParishAdmin } from "../middleware/auth";

const router = Router();

router.get("", auth, getParishInventory);

router.get("/asset/:id", auth, getAsset);

router.post("", auth, isParishAdmin, addAssetToInventory);

router.patch("/asset/:id", auth, isParishAdmin, editAsset);

router.delete("/asset/:id", auth, isParishAdmin, deleteAsset);

// category routes

router.get("/category/all", auth, isAdmin, allInventoryCategories);

router.get("/category", auth, allInventoryCategoriesForParishAdmin);

router.post("/category", auth, isParishAdmin, newInventoryCategory);

router.get("/category/:id", auth, inventoryCategoryByID);

router.patch("/category/:id", auth, isParishAdmin, editInventoryCategory);

router.delete("/category/:id", auth, isParishAdmin, deleteInventoryCategory);

export default router;
