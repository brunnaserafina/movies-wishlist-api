import joi from "joi";
export var SignInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
});
