const express = require("express");
const authRoutes = express.Router();

const {
  register,
  login,
  logout,
  checkUser,
} = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// @route POST api/auth/register
// @desc Register a user
// @access public
authRoutes.post("/register", register);

// @route POST api/auth/login
// @desc Login a user
// @access public
authRoutes.post("/login", login);

// @route DELETE api/auth/logout
// @desc Logout a user
// @access private
authRoutes.delete("/logout", verifyToken, logout);

// @route GET api/auth/
// @desc Check if user is logged in
// @access public
authRoutes.get("/fetchUser", verifyToken, checkUser);

module.exports = authRoutes;
