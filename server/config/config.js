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
  staging: {
    username: process.env.STG_USERNAME,
    password: process.env.STG_PASS,
    database: process.env.STG_DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASS,
    database: process.env.PROD_DATABASE,
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
