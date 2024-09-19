import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishFirstTimerModel
  extends Model<
    InferAttributes<IParishFirstTimerModel>,
    InferCreationAttributes<IParishFirstTimerModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  surname: string;
  othernames: string;
  address: string | null;
  gender: string;
  phone: string | null;
  email: string | null;
  dateAttended: Date | null;
  dob: Date | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PFT = sequelize.define<IParishFirstTimerModel>(
    "ParishFirstTimer",
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
      address: dt.TEXT,
      gender: {
        type: dt.TEXT,
        allowNull: false,
      },
      phone: dt.STRING,
      email: dt.STRING,
      dateAttended: {
        type: dt.DATE,
        field: "date_attended",
      },
      dob: dt.DATE,
    },
    { tableName: "parish_first_timers" },
  );

  return PFT;
}
