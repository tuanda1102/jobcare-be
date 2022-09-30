const express = require("express");
const userRoutes = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const { updateUserProfile } = require("../controllers/user.controller");

// @route POST api/user/update
// @desc Update profile a user
// @access private
userRoutes.post("/update", verifyToken, updateUserProfile);

module.exports = userRoutes;
