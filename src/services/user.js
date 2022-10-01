const { getUser } = require("../repository/auth.repository");
const { updateProfile } = require("../repository/user.repository");

const updateUserProfileService = async (req, res) => {
  const { id, email } = req;

  const user = await getUser(email);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Misssing email/fullname/password",
      data: {},
    });
  }

  try {
    const { password, refreshToken, ...rest } = user.dataValues;

    const data = {
      ...rest,
      ...req.body,
    };

    await updateProfile(id, data);

    return res.status(200).json({
      success: true,
      message: "Update profile successfully!",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
      data: {},
    });
  }
};

module.exports = { updateUserProfileService };
