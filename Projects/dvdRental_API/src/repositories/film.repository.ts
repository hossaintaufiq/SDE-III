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
}; 

export const getPaginatedFilms = async(limit:number, offset:number)=> {
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
        LIMIT $1 OFFSET $2`, 
    [limit, offset])
    return result.rows; 
}

export const getFilmsCount = async()=> {
    const result = await pool.query(`
        SELECT COUNT(*) FROM film`); 
        return Number(result.rows[0].count);
}