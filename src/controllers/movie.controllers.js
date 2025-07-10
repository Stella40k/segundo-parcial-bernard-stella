import { json } from "sequelize";
import { Peliculas } from "../models/movie.model"; 

//trae todas las peliculas
export const getAllPeliculas =async(req, res) => {
    try {
        const peliculas = await Peliculas.findAll();
        res.status(200).json(peliculas)
    } catch (error) {
        res.status(500).json({error: "hubo un error al traer todas las peliculas"})
    }
};