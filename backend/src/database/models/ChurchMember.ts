import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IChurchMemberModel
  extends Model<
    InferAttributes<IChurchMemberModel>,
    InferCreationAttributes<IChurchMemberModel>
  > {
  id: CreationOptional<number>;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const CM = sequelize.define<IChurchMemberModel>(
    "ChurchMember",
    {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { tableName: "church_members", paranoid: true },
  );

  return CM;
}
