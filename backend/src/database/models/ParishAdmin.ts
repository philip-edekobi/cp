import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishAdminModel
  extends Model<
    InferAttributes<IParishAdminModel>,
    InferCreationAttributes<IParishAdminModel>
  > {
  id: CreationOptional<number>;
  churchName: string;
  churchNameAbbr: string | null;
  authorizedName: string;
  email: string;
  passwordHash: string;
  phone: string;
  address: string;
  fax: string | null;
  website: string | null;
  remittancePercentage: number;
  logo: string | null;
  signature: string | null;
  financialStatement: string | null;
  profileImageUrl: string | null;
  subscriptionValid: boolean;
  subscriptionExpiresAt: Date | null;
  availableSmsUnits: number;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PA = sequelize.define<IParishAdminModel>(
    "ParishAdmin",
    {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      churchName: {
        type: dt.STRING,
        allowNull: false,
        field: "church_name",
      },
      churchNameAbbr: {
        type: dt.STRING,
        field: "church_name_abbreviation",
      },
      authorizedName: {
        type: dt.STRING,
        allowNull: false,
        field: "authorized_name",
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
      phone: {
        type: dt.STRING,
        allowNull: false,
      },
      address: {
        type: dt.TEXT,
        allowNull: false,
      },
      fax: dt.STRING,
      website: {
        type: dt.STRING,
        unique: true,
      },
      remittancePercentage: {
        type: dt.DECIMAL,
        allowNull: false,
        field: "remittance_percentage",
      },
      logo: dt.STRING,
      signature: dt.STRING,
      financialStatement: {
        type: dt.STRING,
        field: "financial_statement",
      },
      profileImageUrl: {
        type: dt.STRING,
        field: "profile_image_url",
      },
      subscriptionValid: {
        type: dt.BOOLEAN,
        defaultValue: false,
        field: "sDubscription_valid",
      },
      subscriptionExpiresAt: {
        type: dt.DATE,
        field: "subscription_expires_at",
      },
      availableSmsUnits: {
        type: dt.INTEGER,
        defaultValue: 0,
        field: "available_sms_units",
      },
    },
    { tableName: "parish_admins", paranoid: true },
  );

  return PA;
}
