export interface AssetDto {
  id?: number;
  parishAdminID: number;
  name: string;
  value: string;
  status: string;
  categoryID: number;
  departmentID: number;
  dateProcured: Date;
}

export interface InventoryCategoryDto {
  id?: number;
  parishAdminID: number;
  name: string;
}
