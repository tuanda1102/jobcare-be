const {
  createJobService,
  updateJobService,
  deleteJobService,
  getAllJobsService,
} = require("../services/jobs");

const getAllJobs = async (req, res) => {
  return await getAllJobsService(req, res);
};

const createJob = async (req, res) => {
  return await createJobService(req, res);
};

const updateJob = async (req, res) => {
  return await updateJobService(req, res);
};

const deleteJob = async (req, res) => {
  return await deleteJobService(req, res);
};

module.exports = { createJob, updateJob, deleteJob, getAllJobs };
