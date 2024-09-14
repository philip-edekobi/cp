const { Sequelize, DataTypes } = require("sequelize");

const loadAdmin = require("./models/Admin");
const loadParishAdmin = require("./models/ParishAdmin");

const sequelize = new Sequelize(
  "chapelpad",
  "chapelpad",
  process.env.DBPASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false,
  },
);

async function testConn() {
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

const models = {
  Admin,
  ParishAdmin,
};

module.exports = { sequelize, testConn, models };
