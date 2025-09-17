const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { authenticate } = require("../middleware/authMiddleware");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ id: user.id, username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;