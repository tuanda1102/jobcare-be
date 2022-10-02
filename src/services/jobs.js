const { getUser } = require("../repository/auth.repository");
const { ROLE } = require("../utils/constants.utils");
const {
  createJobServer,
  updateJobServer,
  findJobServer,
  getAllJobs,
} = require("../repository/job.repository");

const getAllJobsService = async (req, res) => {
  try {
    const jobList = await getAllJobs();

    return res.status(200).json({
      success: true,
      message: "Get all jobs successfully",
      data: jobList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

const createJobService = async (req, res) => {
  const { email, role } = req;

  const recruiter = await getUser(email);

  if (!recruiter || role !== ROLE.RECRUITER) {
    return res.status(403).json({
      success: false,
      message: "Không được phép thêm tin tuyển dụng",
      data: {},
    });
  }

  try {
    const newJob = await createJobServer(req.body);

    res.status(200).json({
      success: true,
      message: "Create job successfully",
      data: newJob,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

const updateJobService = async (req, res) => {
  const jobId = +req.params.id;

  const job = await findJobServer(jobId);

  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Invalid Job",
      data: {},
    });
  }

  if (req.id !== job.recruiterId) {
    return res.status(404).json({
      success: false,
      message: "Không có quyền sửa tin tuyển dụng",
      data: {},
    });
  }

  try {
    await updateJobServer(jobId, req.body);

    return res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

const deleteJobService = async (req, res) => {
  const jobId = +req.params.id;

  const job = await findJobServer(jobId);

  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Invalid Job",
      data: {},
    });
  }

  if (req.id !== job.recruiterId) {
    return res.status(404).json({
      success: false,
      message: "Không có quyền sửa tin tuyển dụng",
      data: {},
    });
  }

  try {
    const jobUpdate = { ...job, isDeleted: true };
    await updateJobServer(jobId, jobUpdate);

    return res.status(200).json({
      success: true,
      message: "Delete successfully",
      data: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

module.exports = {
  createJobService,
  updateJobService,
  deleteJobService,
  getAllJobsService,
};
