import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishContributionModel
  extends Model<
    InferAttributes<IParishContributionModel>,
    InferCreationAttributes<IParishContributionModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  memberID: number;
  phone: string | null;
  email: string | null;
  address: string | null;
  programID: number;
  description: string | null;
  paymentMode: string;
  contributionTypeID: number;
  transactionDate: Date;
  amount: number;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PC = sequelize.define<IParishContributionModel>(
    "ParishContribution",
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
      memberID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "member_id",
        references: {
          model: sequelize.models.ParishChurchMember,
          key: "id",
        },
      },
      phone: dt.STRING,
      email: dt.STRING,
      address: dt.TEXT,
      programID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "program_id",
        references: {
          model: sequelize.models.ParishProgram,
          key: "id",
        },
      },
      description: dt.TEXT,
      paymentMode: {
        type: dt.STRING,
        allowNull: false,
        field: "payment_mode",
      },
      contributionTypeID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "contribution_type_id",
        references: {
          model: sequelize.models.ParishContributionType,
          key: "id",
        },
      },
      transactionDate: {
        type: dt.DATE,
        allowNull: false,
      },
      amount: {
        type: dt.DECIMAL,
        allowNull: false,
      },
    },
    { tableName: "parish_contributions" },
  );

  return PC;
}
