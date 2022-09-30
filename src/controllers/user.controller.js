const { updateUserProfileService } = require("../services/user");

const updateUserProfile = async (req, res) => {
  return await updateUserProfileService(req, res);
};

module.exports = { updateUserProfile };
