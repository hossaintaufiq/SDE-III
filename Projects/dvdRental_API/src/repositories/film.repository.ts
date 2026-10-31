import {pool} from '../config/database';

export const getAllFilms = async()=>{
    const result = await pool.query(`
        SELECT 
        film_id, 
        title, 
        description, 
        release_year, 
        rental_rate, 
        length 

        FROM film 
        ORDER BY film_id 
        LIMIT 20 
        
        `)
    return result.rows;
};

export const getFilmById = async(filmId:number) : Promise<any> =>{
    const result = await pool.query(`
        SELECT 
        film_id, 
        title, 
        description, 
        release_year, 
        rental_rate, 
        length
        FROM film 
        WHERE film_id = $1`, 
    [filmId])
    return result.rows[0];
}