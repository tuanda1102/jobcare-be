const { getUser } = require("../repository/auth.repository");
const { ROLE } = require("../utils/constants.utils");

const createJobService = async (req, res) => {
  const { id, email } = req;

  const recruiter = await getUser(email);

  if (!recruiter || !recruiter.role === ROLE.RECRUITER) {
    return res.status(400).json({
      success: false,
      message: "Unauthorized",
      data: {},
    });
  }

  try {
    // Do something
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

module.exports = { createJobService };
