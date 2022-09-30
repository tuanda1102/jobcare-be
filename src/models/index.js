const { Sequelize } = require("sequelize");

const { HOST, USER, PASSWORD, DB, DIALECT } = require("../config/db.config");
const createTableUsers = require("./users.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const Users = createTableUsers(sequelize);

module.exports = { sequelize, Users };
