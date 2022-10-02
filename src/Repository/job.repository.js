const { Jobs } = require("../models");

const getAllJobs = async () => {
  const jobs = await Jobs.findAll();
  return jobs;
};

const createJobServer = async (data) => {
  const newJob = await Jobs.create(data);
  return newJob;
};

const findJobServer = async (id) => {
  const job = await Jobs.findOne({
    where: {
      id: id,
    },
  });

  return job ? job : false;
};

const updateJobServer = async (jobId, data) => {
  const jobUpdated = await Jobs.update(
    { ...data },
    {
      where: {
        id: jobId,
      },
    }
  );

  return jobUpdated;
};

module.exports = {
  createJobServer,
  findJobServer,
  updateJobServer,
  getAllJobs,
};
