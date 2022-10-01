const express = require("express");
const jobsRoutes = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const { createJob } = require("../controllers/jobs.controller");

// @route POST api/jobs/
// @desc Add a jobs
// @access private
jobsRoutes.post("/", verifyToken, createJob);

module.exports = jobsRoutes;
