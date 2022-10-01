const { Sequelize } = require("sequelize");

const {
  HOST,
  USER,
  PASSWORD,
  DB,
  DIALECT,
} = require("../../src/config/db.config");
const createTableJobs = require("./jobs.model");
const createTableUsers = require("./users.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const Users = createTableUsers(sequelize);
const Jobs = createTableJobs(sequelize);

module.exports = { sequelize, Users, Jobs };
