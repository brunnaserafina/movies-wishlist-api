import joi from "joi";

export const SignUpSchema: joi.ObjectSchema<string> = joi.object({
  username: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required()
});
