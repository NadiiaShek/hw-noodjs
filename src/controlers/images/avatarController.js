const { uploadAvatar } = require("../../services/avatar");
const avatarUploadController = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const { path: temporaryName, originalname } = req.file;

    const { avatarURL } = await uploadAvatar(userId, {
      temporaryName,
      originalname,
    });
    res.status(200).json({
      avatarURL,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  avatarUploadController,
};
