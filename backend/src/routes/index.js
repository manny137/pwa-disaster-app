const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const userRoutes = require("./user");

router.use("/auth", authRoutes);  // /api/auth/register, /api/auth/login
router.use("/user", userRoutes);

module.exports = router;