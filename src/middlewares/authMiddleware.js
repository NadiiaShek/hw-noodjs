const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers/errors");
const authMiddleware = (req, res, next) => {
  const [tokenType, token] = req.headers.authorization.split(" ");
  if (!token || tokenType !== "Bearer") {
    next(new NotAuthorizedError("Give me a correct Bearer token!!!"));
  }
  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    next(new NotAuthorizedError("Will you give me a correct token?"));
  }
};
module.exports = {
  authMiddleware,
};
