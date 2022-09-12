const Joi = require("joi");

//user validation

const validateUsers = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    description: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(user);
};

module.exports = {
  validateUsers,
};
