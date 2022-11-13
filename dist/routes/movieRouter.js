import { Router } from "express";
import { tokenValidate } from "../middlewares/authMiddleware.js";
import * as movieController from "../controllers/movieController.js";
var movieRouter = Router();
movieRouter["delete"]("/movie/:id", tokenValidate, movieController.deleteMovie);
movieRouter.put("/movie/:id", tokenValidate, movieController.updateStatusMovie);
export { movieRouter };
