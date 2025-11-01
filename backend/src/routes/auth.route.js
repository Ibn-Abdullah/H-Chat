import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// التسجيل
router.post("/signup", signup);

// تسجيل الدخول
router.post("/login", login);

// تسجيل الخروج
router.post("/logout", logout);

// تحديث الملف الشخصي (محمي)
router.put("/update-profile", protectRoute, updateProfile);

// فحص حالة تسجيل الدخول (مفتوح مؤقتًا)
router.get("/check", async (req, res) => {
  try {
    // لو فيه كود حماية JWT في الكوكي، استعمله
    // لو مش موجود، رجّع null بشكل آمن
    const user = req.user || null;
    res.json({ authUser: user });
  } catch (error) {
    console.error("Error in /check:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
