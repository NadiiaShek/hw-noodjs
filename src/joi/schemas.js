const Joi = require("joi");
const postSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  phone: Joi.string().alphanum().min(10).max(12).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});
const putSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),

  phone: Joi.string().alphanum().min(10).max(12),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
module.exports = {
  postSchema,
  putSchema,
};
