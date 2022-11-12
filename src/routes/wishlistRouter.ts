import { Router } from "express";

import { tokenValidate } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidatorMiddleware.js";
import { MovieSchema } from "../schemas/movieSchema.js";
import { insertWishList } from "../controllers/wishlistController.js";

const wishlistRouter = Router();

wishlistRouter.post(
  "/wishlist",
  tokenValidate,
  validateSchema(MovieSchema),
  insertWishList
);

export { wishlistRouter };
