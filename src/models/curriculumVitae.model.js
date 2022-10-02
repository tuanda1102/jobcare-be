const { DataTypes } = require("sequelize");

const createTableCurriculumVitae = (sequelize) => {
  const CurriculumVitae = sequelize.define("CurriculumVitae", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    position: {
      type: DataTypes.STRING,
    },
    skills: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.TEXT,
    },
    awards: {
      type: DataTypes.TEXT,
    },
    projects: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  CurriculumVitae.associate = (models) => {
    CurriculumVitae.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user_cv",
    });
  };

  return CurriculumVitae;
};

module.exports = createTableCurriculumVitae;
