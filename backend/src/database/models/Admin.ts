module.exports = function (sequelize, dt) {
  const Admin = sequelize.define(
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
};
