import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidatorMiddleware.js";
import { SignUpSchema } from "../schemas/signUpSchema.js";
import { signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(SignUpSchema), signUp);

export { authRouter };
