const { registrationController } = require("./registration");
const { loginController } = require("./login");
const { logoutController } = require("./logout");
const { currentController } = require("./current");
const { regVerification } = require("../verification/regVerification");
const { verify } = require("../verification/verify");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentController,
  regVerification,
  verify,
};
