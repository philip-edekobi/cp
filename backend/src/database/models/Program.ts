import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishProgramModel
  extends Model<
    InferAttributes<IParishProgramModel>,
    InferCreationAttributes<IParishProgramModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  name: string;
  description: string;
  weekday: string;
  time: string;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PP = sequelize.define<IParishProgramModel>(
    "ParishProgram",
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
      weekday: {
        type: dt.STRING,
        allowNull: false,
      },
      time: {
        type: dt.STRING,
        allowNull: false,
      },
    },
    { tableName: "parish_programs" },
  );

  return PP;
}
