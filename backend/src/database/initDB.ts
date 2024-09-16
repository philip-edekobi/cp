const { Sequelize, DataTypes } = require("sequelize");

import loadAdmin from "./models/Admin";
import loadParishAdmin from "./models/ParishAdmin";

export const sequelize = new Sequelize(
  "chapelpad",
  "chapelpad",
  process.env.DBPASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false,
  },
);

export async function testConn() {
  try {
    await sequelize.authenticate();
    console.log("db connection successfull");
  } catch (err) {
    throw err;
  }
}

const Admin = loadAdmin(sequelize, DataTypes);
const ParishAdmin = loadParishAdmin(sequelize, DataTypes);

// Boat.hasMany(Images);
// Images.belongsTo(Boat);

export const models = {
  Admin,
  ParishAdmin,
};
