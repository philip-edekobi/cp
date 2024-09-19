import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishHouseFellowshipModel
  extends Model<
    InferAttributes<IParishHouseFellowshipModel>,
    InferCreationAttributes<IParishHouseFellowshipModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  name: string;
  address: string;
  host: string;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PHF = sequelize.define<IParishHouseFellowshipModel>(
    "ParishHouseFellowship",
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
      },
      address: {
        type: dt.TEXT,
        allowNull: false,
      },
      host: {
        type: dt.STRING,
        allowNull: false,
      },
    },
    { tableName: "parish_house_fellowships" },
  );

  return PHF;
}
