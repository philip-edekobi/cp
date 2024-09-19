const { Sequelize, DataTypes } = require("sequelize");

import loadAdmin from "./models/Admin";
import loadParishAdmin from "./models/ParishAdmin";
import loadMember from "./models/ChurchMember";
import loadProgram from "./models/Program";
import loadDepartment from "./models/Department";
import loadGroup from "./models/Group";
import loadInventoryCategory from "./models/InventoryCategory";
import loadInventory from "./models/Inventory";
import loadContributionType from "./models/ContributionType";
import loadHouseFellowship from "./models/HouseFellowship";
import loadAttendance from "./models/Attendance";
import loadMinistration from "./models/Ministration";
import loadPledge from "./models/Pledge";
import loadContribution from "./models/Contribution";
import loadBirth from "./models/Birth";
import loadDeath from "./models/Death";
import loadWedding from "./models/Wedding";
import loadChildren from "./models/Children";
import loadFirstTimer from "./models/FirstTimer";
import loadPayment from "./models/Payment";

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
const ChurchMember = loadMember(sequelize, DataTypes);
const ParishProgram = loadProgram(sequelize, DataTypes);
const ParishDepartment = loadDepartment(sequelize, DataTypes);
const ParishGroup = loadGroup(sequelize, DataTypes);
const ParishInventoryCategory = loadInventoryCategory(sequelize, DataTypes);
const ParishInventory = loadInventory(sequelize, DataTypes);
const ParishContribution = loadContribution(sequelize, DataTypes);
const ParishContributionType = loadContributionType(sequelize, DataTypes);
const ParishHouseFellowship = loadHouseFellowship(sequelize, DataTypes);
const ParishAttendance = loadAttendance(sequelize, DataTypes);
const ParishMinistration = loadMinistration(sequelize, DataTypes);
const ParishPledge = loadPledge(sequelize, DataTypes);
const ParishBirth = loadBirth(sequelize, DataTypes);
const ParishDeath = loadDeath(sequelize, DataTypes);
const ParishWedding = loadWedding(sequelize, DataTypes);
const ParishChildren = loadChildren(sequelize, DataTypes);
const ParishFirstTimer = loadFirstTimer(sequelize, DataTypes);
const ParishPayment = loadPayment(sequelize, DataTypes);

ParishAdmin.hasMany(ChurchMember, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishProgram, {
  foreignKey: "parish_admin_id",
});
ParishProgram.hasMany(ParishMinistration, {
  foreignKey: "program_id",
});
ParishProgram.hasMany(ParishContribution, {
  foreignKey: "contribution_type_id",
});

ParishAdmin.hasMany(ParishDepartment, {
  foreignKey: "parish_admin_id",
});
ParishDepartment.hasMany(ParishInventory, {
  foreignKey: "department_id",
});

ParishAdmin.hasMany(ParishGroup, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishInventoryCategory, {
  foreignKey: "parish_admin_id",
});
ParishInventoryCategory.hasMany(ParishInventory, {
  foreignKey: "category_id",
});

ParishAdmin.hasMany(ParishInventory, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishContribution, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishContributionType, {
  foreignKey: "parish_admin_id",
});
ParishContributionType.hasMany(ParishContribution, {
  foreignKey: "contribution_type_id",
});

ParishAdmin.hasMany(ParishHouseFellowship, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishAttendance, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishMinistration, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishPledge, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishBirth, {
  foreignKey: "parish_admin_id",
});
ParishBirth.hasOne(ChurchMember, {
  foreignKey: "father_id",
});
ParishBirth.hasOne(ChurchMember, {
  foreignKey: "mother_id",
});

ParishAdmin.hasMany(ParishDeath, {
  foreignKey: "parish_admin_id",
});
ParishDeath.hasOne(ChurchMember, {
  foreignKey: "member_id",
});

ParishAdmin.hasMany(ParishWedding, {
  foreignKey: "parish_admin_id",
});
ParishWedding.hasOne(ChurchMember, {
  foreignKey: "husband_id",
});
ParishWedding.hasOne(ChurchMember, {
  foreignKey: "wife_id",
});

ParishAdmin.hasMany(ParishChildren, {
  foreignKey: "parish_admin_id",
});
ParishChildren.hasOne(ChurchMember, {
  foreignKey: "father_id",
});
ParishChildren.hasOne(ChurchMember, {
  foreignKey: "mother_id",
});

ParishAdmin.hasMany(ParishFirstTimer, {
  foreignKey: "parish_admin_id",
});

ParishAdmin.hasMany(ParishPayment, {
  foreignKey: "parish_admin_id",
});

export const models = {
  Admin,
  ParishAdmin,
  ChurchMember,
  ParishProgram,
  ParishDepartment,
  ParishGroup,
  ParishInventoryCategory,
  ParishInventory,
  ParishContribution,
  ParishContributionType,
  ParishHouseFellowship,
  ParishAttendance,
  ParishMinistration,
  ParishPledge,
  ParishBirth,
  ParishDeath,
  ParishWedding,
  ParishChildren,
  ParishFirstTimer,
  ParishPayment,
};
