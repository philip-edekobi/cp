import { Model } from "sequelize";

export type IRepository = {
  getAll: () => Promise<Model[]>;
  getByEmail?: (email: string) => Promise<Model | null>;
  getByID: (id: number) => Promise<Model | null>;
  create: (details: any) => Promise<Model>;
  deleteByID: (id: number) => Promise<void>;
  updateByID: (id: number, updateDetails: any) => Promise<Model | null>;
};
