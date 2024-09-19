import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishPledgeModel
  extends Model<
    InferAttributes<IParishPledgeModel>,
    InferCreationAttributes<IParishPledgeModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  isMember: boolean;
  name: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  amount: number;
  pledgeDate: Date;
  redeemDate: Date;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PPL = sequelize.define<IParishPledgeModel>(
    "ParishPledge",
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
      isMember: {
        type: dt.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: "is_member",
      },
      name: {
        type: dt.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: dt.STRING,
        allowNull: false,
      },
      email: {
        type: dt.STRING,
        allowNull: false,
      },
      address: {
        type: dt.TEXT,
        allowNull: false,
      },
      description: {
        type: dt.TEXT,
        allowNull: false,
      },
      amount: {
        type: dt.DECIMAL,
        allowNull: false,
      },
      pledgeDate: {
        type: dt.DATE,
        allowNull: false,
      },
      redeemDate: {
        type: dt.DATE,
        allowNull: false,
      },
    },
    { tableName: "parish_pledges" },
  );

  return PPL;
}
