import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

export const Peliculas = sequelize.define("Pelicula",
    { 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        director:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        genere:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING
        },
    }
    
);