const express = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./users.route");

const router = express.Router();

router.use("/api/auth", authRoutes);
router.use("/api/user", userRoutes);

module.exports = router;
