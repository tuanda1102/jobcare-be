require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Invalid authorization",
      data: {},
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.id = decoded.userId;
    req.email = decoded.email;

    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      success: false,
      message: "Forbidden ",
      data: {},
    });
  }
};

module.exports = { verifyToken };
