const express = require("express");
const router = express.Router();
const controlers = require("../../controlers/authorization/index");
const userMiddlevare = require("../../middlewares/userMiddlevare");
const { avatarsMiddleware } = require("../../middlewares/avatarsMiddleware");
const {
  avatarUploadController,
} = require("../../controlers/images/avatarController");

router.post("/register", async (req, res, next) => {
  controlers.registrationController(req, res, next);
});
router.get("/login", async (req, res, next) => {
  controlers.loginController(req, res, next);
});
router.post("/logout", async (req, res, next) => {
  controlers.logoutController(req, res, next);
});
router.get("/current", userMiddlevare, async (req, res, next) => {
  controlers.currentController(req, res, next);
});
router.patch(
  "/avatars",
  avatarsMiddleware.single("avatar"),
  async (req, res, next) => {
    avatarUploadController(req, res, next);
  }
);
module.exports = router;
