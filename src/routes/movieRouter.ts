import { Router } from "express";

import { tokenValidate } from "../middlewares/authMiddleware.js";
import { deleteMovie } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.delete("/movie/:id", tokenValidate, deleteMovie);

export { movieRouter };
