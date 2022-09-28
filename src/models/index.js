const { Sequelize } = require("sequelize");

const { HOST, USER, PASSWORD, DB, dialect } = require("../config/db.config");
const { createTableProfiles } = require("./profile.model");
const { createTableUsers } = require("./users.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

const Users = createTableUsers(sequelize);
const Profiles = createTableProfiles(sequelize);

module.exports = { sequelize, Users, Profiles };
