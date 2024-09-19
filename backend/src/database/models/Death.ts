import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishDeathModel
  extends Model<
    InferAttributes<IParishDeathModel>,
    InferCreationAttributes<IParishDeathModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  memberID: number;
  deathDay: Date;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PDTH = sequelize.define<IParishDeathModel>(
    "ParishDeath",
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
      memberID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "member_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      deathDay: {
        type: dt.DATE,
        allowNull: false,
        field: "death_day",
      },
    },
    { tableName: "parish_deaths" },
  );

  return PDTH;
}
