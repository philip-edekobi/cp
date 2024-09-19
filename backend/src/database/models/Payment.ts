import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishPaymentModel
  extends Model<
    InferAttributes<IParishPaymentModel>,
    InferCreationAttributes<IParishPaymentModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  amount: number;
  type: string;
  smsUnits: number | null;
  subscriptionPackage: string | null;
  subscriptionRate: number | null;
  subscriptionMonths: number | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PPAY = sequelize.define<IParishPaymentModel>(
    "ParishPayment",
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
      amount: {
        type: dt.DECIMAL,
        allowNull: false,
      },
      type: {
        type: dt.ENUM("SMS", "SUBSCRIPTION"),
        allowNull: false,
      },
      smsUnits: {
        type: dt.INTEGER,
        field: "sms_units",
      },
      subscriptionPackage: {
        type: dt.STRING,
        field: "subscription_package_name",
      },
      subscriptionRate: {
        type: dt.DECIMAL,
        field: "subscription_monthly_rate",
      },
      subscriptionMonths: {
        type: dt.INTEGER,
        field: "subscription_months",
      },
    },
    { tableName: "parish_payments" },
  );

  return PPAY;
}
