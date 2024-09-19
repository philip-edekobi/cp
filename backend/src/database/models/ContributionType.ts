import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishContributionTypeModel
  extends Model<
    InferAttributes<IParishContributionTypeModel>,
    InferCreationAttributes<IParishContributionTypeModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  contributionType: string;
  description: string | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PCT = sequelize.define<IParishContributionTypeModel>(
    "ParishContributionType",
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
      contributionType: {
        type: dt.STRING,
        allowNull: false,
      },
      description: dt.TEXT,
    },
    { tableName: "parish_contribution_types" },
  );

  return PCT;
}
