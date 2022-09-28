const express = require("express");
const profilesRouters = express.Router();

const {
  editProfile,
  deleteProfile,
  getProfile,
} = require("../controllers/profile.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// @route GET api/profile
// @desc GET profile of users
// @access private
profilesRouters.get("/", verifyToken, getProfile);

// @route POST api/profile
// @desc UPDATE OR CREATE profile for users
// @access private
profilesRouters.post("/", verifyToken, editProfile);

// @route DELETE api/profile
// @desc Delete profile for users
// @access private
profilesRouters.delete("/:id", verifyToken, deleteProfile);

module.exports = profilesRouters;
