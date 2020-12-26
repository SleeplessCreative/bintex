require("dotenv").config();
const path = require("path");

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "../", "config", "config.json"))[
  env.trim()
];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.invoices = require("./shipments/invoices")(sequelize, Sequelize);
db.receipts = require("./shipments/receipts")(sequelize, Sequelize);

db.provinces = require("./cost/provinces")(sequelize, Sequelize);
db.cities = require("./cost/cities")(sequelize, Sequelize);
db.urbans = require("./cost/urbans")(sequelize, Sequelize);

db.users = require("./authentication/users")(sequelize, Sequelize);
db.roles = require("./authentication/role")(sequelize, Sequelize);

db.agent = require("./agent/agent")(sequelize, Sequelize);
db.driver = require("./driver/driver")(sequelize, Sequelize);
db.driverHistory = require("./driver/history")(sequelize, Sequelize);

db.invoices.hasOne(db.receipts, {
  foreignKey: "receiptNumber",
  as: "receipts",
});
db.receipts.belongsTo(db.invoices, {
  foreignKey: "invoiceNumber",
  as: "invoices",
});

db.cities.belongsTo(db.provinces, {
  foreignKey: "province_id",
  as: "provinces",
});

db.users.belongsToMany(db.roles, {
  through: "users_in_roles",
  onDelete: "CASCADE",
  foreignKey: "UserId",
  timestamps: false,
});

db.roles.belongsToMany(db.users, {
  through: "users_in_roles",
  onDelete: "CASCADE",
  foreignKey: "RoleId",
  timestamps: false,
});

// db.users.belongsToMany(db.)

db.users.hasOne(db.agent, {
  foreignKey: "user_id",
  as: "user_agent",
});

db.users.hasOne(db.agent, {
  foreignKey: "user_id",
  as: "user_driver",
});

db.driverHistory.belongsTo(db.driver, {
  foreignKey: "driver_id",
  as: "as_driver_id",
});

module.exports = db;
