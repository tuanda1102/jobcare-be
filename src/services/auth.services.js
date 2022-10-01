require("dotenv").config();
const argon2 = require("argon2");

const { generateToken } = require("../utils/auth.utils");

const {
  getUser,
  createUser,
  updateRefreshToken,
  deleteRefreshToken,
} = require("../repository/auth.repository");

const registerService = async (req, res) => {
  const { email, password, fullname, role } = req.body;

  if (!email || !password || !fullname) {
    return res.status(400).json({
      success: false,
      message: "Misssing email/fullname/password",
      data: {},
    });
  }

  try {
    // Kiểm tra xem đã tồn tại User đó chưa
    const user = await getUser(email);
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already", data: {} });
    }

    // ALL good
    // Return token
    const tokens = generateToken(user);

    const hashedPassword = await argon2.hash(password);

    await createUser({
      email,
      fullname,
      password: hashedPassword,
      role: role ? role : "user",
      refreshToken: tokens.refreshToken,
    });

    res.status(200).json({
      success: true,
      message: "Create user success!",
      data: {
        fullname,
        email,
        role: role ? role : "user",
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

const loginService = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Misssing email/password", data: {} });
  }

  try {
    const user = await getUser(email);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password!",
        data: {},
      });
    }

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password!",
        data: {},
      });
    }

    // All GOOD
    // Return token
    const tokens = generateToken(user);

    // Update refreshToken
    await updateRefreshToken(user, tokens.refreshToken);

    res.status(200).json({
      success: true,
      message: "Logged is Succesfully!",
      data: {
        fullname: user.fullname,
        email: user.email,
        id: user.id,
        role: user.role,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

const logoutService = async (req, res) => {
  try {
    await deleteRefreshToken(req.id);
    res.status(204).send({
      success: true,
      message: "Logout successfully!",
      data: {},
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

const checkUserService = async (req, res) => {
  console.log("checkUserService", req.headers);
  try {
    const user = await getUser(req.email);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found!", data: {} });
    }
    res.status(200).json({
      success: true,
      message: "User already!",
      data: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error!", data: {} });
  }
};

module.exports = {
  registerService,
  loginService,
  logoutService,
  checkUserService,
};
