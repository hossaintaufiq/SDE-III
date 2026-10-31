import express from "express";
import {pool} from './config/database';
import filmRoutes from "./routes/film.routes";

const app = express() ; 

app.use(express.json()) ;

app.get("/api/health/db", async (req,res)=>{
    try {
        const result = await pool.query(`
            SELECT 
            NOW() AS server_time, 
            current_database() AS database_name
            `); 

        res.status(200).json({
            success: true, 
            message: "PostgreSQL database connection is healthy",
            data:result.rows[0]
        })
    }catch(error){
        console.error("Error checking database health:", error);

        res.status(500).json({
            success: false,
            message: "Error checking database health",
        })
    }
})

app.use("/api/films", filmRoutes) ;

export default app ;