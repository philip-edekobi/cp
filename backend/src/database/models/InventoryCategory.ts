import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishInventoryCategoryModel
  extends Model<
    InferAttributes<IParishInventoryCategoryModel>,
    InferCreationAttributes<IParishInventoryCategoryModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  name: string;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PIC = sequelize.define<IParishInventoryCategoryModel>(
    "ParishInventoryCategory",
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
        allowNull: false,
        unique: true,
      },
    },
    { tableName: "parish_inventory_category" },
  );

  return PIC;
}
