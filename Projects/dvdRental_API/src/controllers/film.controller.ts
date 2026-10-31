import { Request, Response } from "express";
import { getAllFilms, getFilmById,getPaginatedFilms,getFilmsCount } from "../repositories/film.repository";


export const getFilms = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page= Number(req.query.page??1); 
    const limit = Number(req.query.limit??10); 

    if( !Number.isInteger(page) || !Number.isInteger(limit) || page <= 0 || limit <= 0 ||limit >100){
        res.status(400).json({
            success:false,
            message:"Invalid pagination parameters. Page and limit must be positive integers, and limit must not exceed 100."
        })
        return; 
    }

    const offset= (page-1)*limit; 
    const films = await getPaginatedFilms(limit, offset);
    const total = await getFilmsCount();

    res.status(200).json({
      success: true,
      count: films.length,
      total: total,
      pagination:{
        page,
        limit,
        total, 
        totalPages: Math.ceil(total/limit)
      },
      data: films,
    });

  } catch (error) {
    console.error("Error fetching films:", error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve films",
    });
  }
};

export const getFilm = async (req: Request, res: Response): Promise<void> => {
  try {
    const filmId = Number(req.params.id);
    if (!Number.isInteger(filmId) || filmId <= 0) {
      res.status(400).json({
        success: false,
        message: "Invalid film ID. It must be a positive integer.",
      });
      return;
    }
    const film = await getFilmById(filmId);

    if(!film) {
      res.status(404).json({
        success: false,
        message: "Film not found",
        data: null
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Film retrieved successfully",
      data: film
    });
  } catch (error) {
    console.error("Error retrieving films:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving films",
      data: null,
    });
  }
};


