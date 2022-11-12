import { Router } from "express";

import { authRouter } from "./authRouter.js";
import { wishlistRouter } from "./wishlistRouter.js";

const router = Router();

router.use(authRouter);
router.use(wishlistRouter);

export { router };
