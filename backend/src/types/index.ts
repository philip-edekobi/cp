import { IAdminModel } from "../database/models/Admin";
import { IParishAdminModel } from "../database/models/ParishAdmin";
import { IParishBirthModel } from "../database/models/Birth";
import { IParishGroupModel } from "../database/models/Group";
import { IParishDeathModel } from "../database/models/Death";
import { IParishChildrenModel } from "../database/models/Children";
import { IParishContributionModel } from "../database/models/Contribution";
import { IParishContributionTypeModel } from "../database/models/ContributionType";
import { IParishAttendanceModel } from "../database/models/Attendance";
import { IParishDepartmentModel } from "../database/models/Department";
import { IParishFirstTimerModel } from "../database/models/FirstTimer";
import { IParishInventoryModel } from "../database/models/Inventory";
import { IParishInventoryCategoryModel } from "../database/models/InventoryCategory";
import { IParishPaymentModel } from "../database/models/Payment";
import { IParishPledgeModel } from "../database/models/Pledge";
import { IParishProgramModel } from "../database/models/Program";
import { IParishHouseFellowshipModel } from "../database/models/HouseFellowship";
import { IParishWeddingModel } from "../database/models/Wedding";
import { IParishMinistrationModel } from "../database/models/Ministration";
import { IChurchMemberModel } from "../database/models/ChurchMember";

type TModelUnion =
  | IAdminModel
  | IParishAdminModel
  | IParishBirthModel
  | IParishGroupModel
  | IParishDeathModel
  | IParishChildrenModel
  | IParishContributionModel
  | IParishContributionTypeModel
  | IParishAttendanceModel
  | IParishDepartmentModel
  | IParishFirstTimerModel
  | IParishInventoryModel
  | IParishInventoryCategoryModel
  | IParishPaymentModel
  | IParishPledgeModel
  | IParishProgramModel
  | IParishHouseFellowshipModel
  | IParishWeddingModel
  | IParishMinistrationModel
  | IChurchMemberModel;

export type IRepository = {
  getAll: <T extends TModelUnion>() => Promise<T[]>;

  getByEmail?: (
    email: string,
  ) => Promise<IAdminModel | IParishAdminModel | IChurchMemberModel | null>;

  getByID: <T extends TModelUnion>(id: number) => Promise<T | null>;

  getByClause?: <T extends TModelUnion>(
    clause: Partial<T>,
  ) => Promise<T[] | null>;

  create: <T extends TModelUnion>(details: T) => Promise<T>;

  deleteByID: (id: number) => Promise<void>;

  updateByID: <T extends TModelUnion>(
    id: number,
    updateDetails: Partial<T>,
  ) => Promise<T | null>;
};

export type WhereParishAdminClause = {
  parishAdminID: number;
};
