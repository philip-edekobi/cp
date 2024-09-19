import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishChildrenModel
  extends Model<
    InferAttributes<IParishChildrenModel>,
    InferCreationAttributes<IParishChildrenModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  surname: string;
  othernames: string;
  fatherID: number | null;
  motherID: number | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PCD = sequelize.define<IParishChildrenModel>(
    "ParishChildren",
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
      surname: {
        type: dt.STRING,
        allowNull: false,
      },
      othernames: {
        type: dt.STRING,
        allowNull: false,
      },
      fatherID: {
        type: dt.INTEGER,
        field: "father_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      motherID: {
        type: dt.INTEGER,
        field: "mother_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
    },
    { tableName: "parish_children" },
  );

  return PCD;
}
