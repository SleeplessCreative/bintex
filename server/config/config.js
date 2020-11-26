require("dotenv").config();
const Sequelize = require("sequelize");

module.exports = {
  development: {
    username: "sleepless",
    password: "1234",
    database: "bintex",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
