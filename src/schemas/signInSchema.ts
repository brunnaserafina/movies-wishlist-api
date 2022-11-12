import joi from "joi";

export const SignInSchema: joi.ObjectSchema<string> = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
});
