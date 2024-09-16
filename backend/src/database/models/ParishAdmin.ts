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
  churchNameAbbr: CreationOptional<string>;
  authorizedName: string;
  email: string;
  passwordHash: string;
  phone: string;
  address: string;
  fax: CreationOptional<string>;
  website: CreationOptional<string>;
  remittancePercentage: string;
  logo: CreationOptional<string>;
  signature: CreationOptional<string>;
  financialStatement: CreationOptional<string>;
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
        type: dt.INTEGER,
        allowNull: false,
        field: "remittance_percentage",
      },
      logo: dt.STRING,
      signature: dt.STRING,
      financialStatement: {
        type: dt.STRING,
        field: "financial_statement",
      },
    },
    { tableName: "parish_admins", paranoid: true },
  );

  return PA;
}
