const express = require("express");
const userRoutes = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const {
  updateUserProfile,
  assessRecuiter,
} = require("../controllers/user.controller");

// @route POST api/user/update
// @desc Update profile a user
// @access private
userRoutes.post("/update", verifyToken, updateUserProfile);

// @route POST api/user/assess
// @desc Assess  a recruiter
// @access private
userRoutes.post("/assess", verifyToken, assessRecuiter);

module.exports = userRoutes;
