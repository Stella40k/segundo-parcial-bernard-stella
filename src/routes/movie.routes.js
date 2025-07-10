import { controllers } from "../controllers/movie.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", controllers.GetAllMovies);
router.get("/:id", controllers.GetMovieById);
router.post("/", controllers.CreateMovie);
router.put("/:id", controllers.UpdateMovie);
router.delete("/:id", controllers.DeleteMovie);

export default router;