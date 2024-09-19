import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishWeddingModel
  extends Model<
    InferAttributes<IParishWeddingModel>,
    InferCreationAttributes<IParishWeddingModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  husbandID: number;
  wifeID: number;
  familyName: string;
  weddingDay: Date;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PWD = sequelize.define<IParishWeddingModel>(
    "ParishWedding",
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
      husbandID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "husband_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      wifeID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "wife_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      familyName: {
        type: dt.STRING,
        field: "family_name",
      },
      weddingDay: {
        type: dt.DATE,
        allowNull: false,
        field: "wedding_day",
      },
    },
    { tableName: "parish_weddings" },
  );

  return PWD;
}
