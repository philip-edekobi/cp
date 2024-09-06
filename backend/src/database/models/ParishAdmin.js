module.exports = function (sequelize, dt) {
  const PA = sequelize.define(
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
      fax: {
        type: dt.STRING,
      },
      website: {
        type: dt.STRING,
        unique: true,
      },
      remittancePercentage: {
        type: dt.INTEGER,
        allowNull: false,
        field: "remittance_percentage",
      },
      logo: {
        type: dt.STRING,
        allowNull: false,
      },
      signature: {
        type: dt.STRING,
        allowNull: false,
      },
      financialStatement: {
        type: dt.STRING,
        allowNull: false,
        field: "financial_statement",
      },
    },
    { tableName: "parish_admins", paranoid: true },
  );

  return PA;
};
