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
  male: number;
  female: number;
  teenagers: number;
  children: number;
  comments: string | null;
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
      male: {
        type: dt.INTEGER,
        allowNull: false,
      },
      female: {
        type: dt.INTEGER,
        allowNull: false,
      },
      teenagers: {
        type: dt.INTEGER,
        allowNull: false,
      },
      children: {
        type: dt.INTEGER,
        allowNull: false,
      },
      comments: dt.TEXT,
    },
    { tableName: "parish_attendance" },
  );

  return PAT;
}
