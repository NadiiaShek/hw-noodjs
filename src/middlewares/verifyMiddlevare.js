const schema = require("../schemas/schemas");

const verifyMiddlevare = (req, res, next) => {
  const validationResult = schema.schemaEmail.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error });
  }
  next();
};
module.exports = {
  verifyMiddlevare,
};
