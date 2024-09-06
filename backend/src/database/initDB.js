const { Sequelize, DataTypes } = require("sequelize");

// const loadWaitlist = require("./models/Waitlist");

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

// const Waitlist = loadWaitlist(sequelize, DataTypes);

// Boat.hasMany(Images);
// Images.belongsTo(Boat);

const models = {
  // Waitlist,
};

module.exports = { sequelize, testConn, models };
