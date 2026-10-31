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
}