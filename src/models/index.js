const { Sequelize } = require("sequelize");

const {
  HOST,
  USER,
  PASSWORD,
  DB,
  DIALECT,
} = require("../../src/config/db.config");
const createTableUsers = require("./users.model");
const createTableJobs = require("./jobs.model");
const createTableCurriculumVitae = require("./curriculumVitae.model");
const createTableAssess = require("./assess.model");
const createTableJobCategories = require("./jobCategories.model");
const createTableApplication = require("./application.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

const Users = createTableUsers(sequelize);
const Jobs = createTableJobs(sequelize);
const CurriculumVitae = createTableCurriculumVitae(sequelize);
const Assess = createTableAssess(sequelize);
const JobCategories = createTableJobCategories(sequelize);
const Application = createTableApplication(sequelize);

module.exports = {
  sequelize,
  Users,
  Jobs,
  CurriculumVitae,
  Assess,
  JobCategories,
  Application,
};
