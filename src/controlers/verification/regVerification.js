const { registerVerification } = require("../../services/auth");

const regVerification = async (req, res) => {
  const { verificationToken } = req.params;

  await registerVerification(verificationToken);

  res.status(200).json({ message: "Verification successful" });
};

module.exports = {
  regVerification,
};