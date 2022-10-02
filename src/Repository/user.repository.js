const { Users, Assess, Jobs } = require("../models");

const updateProfile = async (userId, payload) => {
  const newUserProfile = await Users.update(payload, {
    where: {
      id: userId,
    },
  });
  return newUserProfile;
};

const getUserById = async (userId) => {
  const recruiter = await Users.findOne({
    where: {
      id: userId,
    },
    include: ["recuiter_jobs"],
  });
  return recruiter;
};

const createAssessRecruiterServer = async (message, userId, recruiterId) => {
  const assessed = await Assess.create({ message, userId, recruiterId });
  return assessed;
};

module.exports = { updateProfile, createAssessRecruiterServer, getUserById };
