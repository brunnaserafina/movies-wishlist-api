import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidatorMiddleware.js";
import { SignUpSchema } from "../schemas/signUpSchema.js";
import { SignInSchema } from "../schemas/signInSchema.js";
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(SignUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(SignInSchema), signIn);

export { authRouter };
