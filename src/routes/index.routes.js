const express = require("express");
const authRouters = require("./auth.routes");
const profilesRouters = require("./profile.routes");

const router = express.Router();

router.use("/api/auth", authRouters);
router.use("/api/profile", profilesRouters);

module.exports = router;
