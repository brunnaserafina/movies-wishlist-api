import { Router } from "express";

import { tokenValidate } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidatorMiddleware.js";
import { MovieSchema } from "../schemas/movieSchema.js";
import * as wishlistController from "../controllers/wishlistController.js";

const wishlistRouter = Router();

wishlistRouter.post(
  "/wishlist",
  tokenValidate,
  validateSchema(MovieSchema),
  wishlistController.insertWishList
);
wishlistRouter.get("/wishlist", tokenValidate, wishlistController.getWishList);

export { wishlistRouter };
