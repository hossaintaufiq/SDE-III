import {Router} from "express";
import { getFilm, getFilms } from "../controllers/film.controller";

const router = Router();

router.get("/", getFilms);
router.get("/:id",getFilm); // Placeholder for future implementation of getting a film by ID

export default router;