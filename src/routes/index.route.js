const express = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./users.route");
const jobsRoutes = require("./jobs.route");

const router = express.Router();

router.use("/api/auth", authRoutes);
router.use("/api/user", userRoutes);
router.use("/api/jobs", jobsRoutes);

module.exports = router;
