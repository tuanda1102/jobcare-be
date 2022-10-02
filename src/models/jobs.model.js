const { DataTypes } = require("sequelize");

const createTableJobs = (sequelize) => {
  const Jobs = sequelize.define("Jobs", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    welfare: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
    workFrom: {
      type: DataTypes.STRING,
    },
    endDate: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
    },
    recruiterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jobCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Jobs.associate = (models) => {
    Jobs.hasMany(models.Application, {
      as: "job_application",
    });
    Jobs.belongsTo(models.Users, {
      foreignKey: "recruiterId",
      as: "recuiter_jobs",
    });
    Jobs.belongsTo(models.JobCategories, {
      foreignKey: "jobCategoryId",
      as: "job_categories",
    });
  };

  return Jobs;
};

module.exports = createTableJobs;
