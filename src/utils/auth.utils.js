require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const accessToken = jwt.sign(
    { userId: payload.id, email: payload.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "2h",
    }
  );
  const refreshToken = jwt.sign(
    { userId: payload.id, email: payload.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "365d",
    }
  );

  return { accessToken, refreshToken };
};

module.exports = { generateToken };
