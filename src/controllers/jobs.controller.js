const { createJobService } = require("../services/jobs");

const createJob = async (req, res) => {
  return await createJobService(req, res);
};

module.exports = { createJob };
