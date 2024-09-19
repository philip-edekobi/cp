import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishGroupModel
  extends Model<
    InferAttributes<IParishGroupModel>,
    InferCreationAttributes<IParishGroupModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  name: string;
  description: string;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PD = sequelize.define<IParishGroupModel>(
    "ParishGroup",
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
      description: {
        type: dt.TEXT,
        allowNull: false,
      },
    },
    { tableName: "parish_groups" },
  );

  return PD;
}
