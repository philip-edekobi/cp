import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishAttendanceModel
  extends Model<
    InferAttributes<IParishAttendanceModel>,
    InferCreationAttributes<IParishAttendanceModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  date: Date;
  total: number;
  male: number | null;
  female: number | null;
  adults: number;
  men: number | null;
  women: number | null;
  teenagers: number;
  maleTeenagers: number | null;
  femaleTeenagers: number | null;
  children: number;
  maleChildren: number | null;
  femaleChildren: number | null;
  workers: number;
  // comments: string | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PAT = sequelize.define<IParishAttendanceModel>(
    "ParishAttendance",
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
      date: {
        type: dt.DATE,
        allowNull: false,
      },
      total: {
        type: dt.INTEGER,
        allowNull: false,
      },
      male: dt.INTEGER,
      female: dt.INTEGER,
      adults: {
        type: dt.INTEGER,
        allowNull: false,
      },
      men: dt.INTEGER,
      women: dt.INTEGER,
      teenagers: {
        type: dt.INTEGER,
        allowNull: false,
      },
      maleTeenagers: dt.INTEGER,
      femaleTeenagers: dt.INTEGER,
      children: {
        type: dt.INTEGER,
        allowNull: false,
      },
      maleChildren: dt.INTEGER,
      femaleChildren: dt.INTEGER,
      workers: {
        type: dt.INTEGER,
        allowNull: false,
      },
      // comments: dt.TEXT,
    },
    { tableName: "parish_attendance" },
  );

  return PAT;
}
