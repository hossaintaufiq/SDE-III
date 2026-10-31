import {Router} from "express";
import { getFilms } from "../controllers/film.controller";

const router = Router();

router.get("/", getFilms);

export default router;