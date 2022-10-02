const {
  updateUserProfileService,
  assessRecuiterService,
} = require("../services/user");

const updateUserProfile = async (req, res) => {
  return await updateUserProfileService(req, res);
};

const assessRecuiter = async (req, res) => {
  return await assessRecuiterService(req, res);
};

module.exports = { updateUserProfile, assessRecuiter };
