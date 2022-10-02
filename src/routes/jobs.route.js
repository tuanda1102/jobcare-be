const express = require("express");
const jobsRoutes = express.Router();

const {
  verifyToken,
  checkRecruiter,
} = require("../middleware/auth.middleware");
const {
  createJob,
  updateJob,
  deleteJob,
  getAllJobs,
} = require("../controllers/jobs.controller");

// @route GET api/jobs/
// @desc GET all jobs
// @access public
jobsRoutes.get("/", getAllJobs);

// @route POST api/jobs/
// @desc create a jobs
// @access private
jobsRoutes.post("/", verifyToken, checkRecruiter, createJob);

// @route UPDATE api/jobs/id
// @desc update a jobs
// @access private
jobsRoutes.post("/:id", verifyToken, checkRecruiter, updateJob);

// @route DELETE api/jobs/id
// @desc Delete a jobs
// @access private
jobsRoutes.delete("/:id", verifyToken, checkRecruiter, deleteJob);

module.exports = jobsRoutes;
