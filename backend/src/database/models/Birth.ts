import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishBirthModel
  extends Model<
    InferAttributes<IParishBirthModel>,
    InferCreationAttributes<IParishBirthModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  fatherID: number;
  motherID: number;
  familyName: string;
  otherNames: string;
  gender: string;
  birthday: Date;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PBTH = sequelize.define<IParishBirthModel>(
    "ParishBirth",
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
      fatherID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "father_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      motherID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "mother_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      familyName: {
        type: dt.STRING,
        allowNull: false,
        field: "family_name",
      },
      otherNames: {
        type: dt.STRING,
        allowNull: false,
        field: "other_names",
      },
      gender: {
        type: dt.STRING,
        allowNull: false,
      },
      birthday: {
        type: dt.DATE,
        allowNull: false,
      },
    },
    { tableName: "parish_births" },
  );

  return PBTH;
}
