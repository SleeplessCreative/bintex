require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.invoices = require("./shipments/invoices")(sequelize, Sequelize);
db.receipts = require("./shipments/receipts")(sequelize, Sequelize);

db.provinces = require("./cost/provinces")(sequelize, Sequelize);
db.cities = require("./cost/cities")(sequelize, Sequelize);
db.urbans = require("./cost/urbans")(sequelize, Sequelize);

db.invoices.hasOne(db.receipts, {
  foreignKey: "receiptNumber",
  as: "receipts",
});
db.receipts.belongsTo(db.invoices, {
  foreignKey: "invoiceNumber",
  as: "invoices",
});

db.provinces.hasMany(db.cities, {
  as: "cities",
});
db.cities.belongsTo(db.provinces, {
  foreignKey: "provinceId",
  as: "provinces",
});
db.cities.hasMany(db.urbans, {
  as: "urbans",
});
db.urbans.belongsTo(db.cities, {
  foreignKey: "cityId",
  as: "cities",
});

module.exports = db;
