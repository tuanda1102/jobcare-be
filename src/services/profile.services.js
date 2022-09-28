const { getUser } = require("../Repository/auth.repository");
const {
  editProfile,
  createProfile,
  findProfile,
  deleteProfile,
} = require("../Repository/profile.repository");

const getProfileService = async (req, res) => {
  const { id, email } = req;

  try {
    const user = await getUser(email);
    const profile = await findProfile(id);

    if (!profile) {
      return res.json({
        success: false,
        message: "Invalid Profile!",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Get profile successfully!",
      data: {
        fullname: user.fullname,
        email: user.email,
        id: user.id,
        role: user.role,
        ...profile.dataValues,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

const editProfileService = async (req, res) => {
  const { id, email } = req;
  const user = await getUser(email);

  const profile = await findProfile(id);

  try {
    if (!profile) {
      const newProfile = await createProfile(id, req.body);
      return res.status(200).json({
        success: true,
        message: "Update Profile Succesfully!",
        data: {
          fullname: user.fullname,
          email: user.email,
          id: user.id,
          role: user.role,
          profile: { ...newProfile.dataValues },
        },
      });
    }

    await editProfile(id, req.body);
    const newProfile = await findProfile(id);

    res.status(200).json({
      success: true,
      message: "Update Profile Succesfully!",
      data: {
        fullname: user.fullname,
        email: user.email,
        id: user.id,
        role: user.role,
        profile: { ...newProfile.dataValues },
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

const deleteProfileService = async (req, res) => {
  const { id } = req.params;
  const profile = await findProfile(id);

  if (!profile) {
    return res.json({
      success: false,
      message: "Invalid profile",
      data: {},
    });
  }

  try {
    await deleteProfile(id);
    res
      .status(200)
      .json({ success: true, message: "Delete successfully!", data: {} });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

module.exports = {
  editProfileService,
  deleteProfileService,
  getProfileService,
};
