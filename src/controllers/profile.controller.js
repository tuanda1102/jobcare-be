const {
  editProfileService,
  deleteProfileService,
  getProfileService,
} = require("../services/profile.services");

const getProfile = async (req, res) => {
  return await getProfileService(req, res);
};

const editProfile = async (req, res) => {
  return await editProfileService(req, res);
};

const deleteProfile = async (req, res) => {
  return await deleteProfileService(req, res);
};

module.exports = { editProfile, deleteProfile, getProfile };
