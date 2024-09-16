import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IAdminModel
  extends Model<
    InferAttributes<IAdminModel>,
    InferCreationAttributes<IAdminModel>
  > {
  id: CreationOptional<number>;
  email: string;
  passwordHash: string;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const Admin = sequelize.define<IAdminModel>(
    "Admin",
    {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: dt.STRING,
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: dt.STRING,
        allowNull: false,
        field: "password_hash",
      },
    },
    { tableName: "admins", paranoid: true },
  );

  return Admin;
}
