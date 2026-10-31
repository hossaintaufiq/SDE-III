import {Request, Response} from "express";
import { getAllFilms } from "../repositories/film.repository";
import { count } from "console";


export const getFilms = async (req:Request, res:Response):Promise<void>=> { 
    try{ 
        const films = await getAllFilms();
        res.status(200).json({
            success: true, 
            message: "Films retrieved successfully",
            count: films.length,
            data: films
        })
    } catch (error) {
        console.error("Error retrieving films:", error);
        res.status(500).json({
            success: false,
            message: "Error retrieving films",
            data: null
        })
    }
}