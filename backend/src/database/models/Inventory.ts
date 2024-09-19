import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishInventoryModel
  extends Model<
    InferAttributes<IParishInventoryModel>,
    InferCreationAttributes<IParishInventoryModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  name: string;
  value: string;
  status: string;
  categoryID: number;
  departmentID: number;
  dateProcured: Date;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PI = sequelize.define<IParishInventoryModel>(
    "ParishInventory",
    {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      parishAdminID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "parish_admin_id",
        references: {
          model: sequelize.models.ParishAdmin,
          key: "id",
        },
      },
      name: {
        type: dt.STRING,
        unique: true,
        allowNull: false,
      },
      value: {
        type: dt.STRING,
        allowNull: false,
      },
      status: {
        type: dt.STRING,
        allowNull: false,
        defaultValue: "Inactive",
      },
      categoryID: {
        type: dt.INTEGER,
        field: "category_id",
        references: {
          model: sequelize.models.ParishInventoryCategory,
          key: "id",
        },
      },
      departmentID: {
        type: dt.INTEGER,
        field: "department_id",
        references: {
          model: sequelize.models.ParishDepartment,
          key: "id",
        },
      },
      dateProcured: {
        type: dt.DATE,
        allowNull: false,
        field: "date_procured",
      },
    },
    { tableName: "parish_inventory", paranoid: true },
  );

  return PI;
}
