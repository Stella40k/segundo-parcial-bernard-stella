import { Sequelize } from "sequelize"; 
import "dotenv/config";

export const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
    }
);

export const connect = async() =>{
    try {
        /* await sequelize.sync({force:true}); */
        await sequelize.authenticate();
        console.log("conexion a la bd")
    } catch (error) {
        console.log("error al conectar", error);
    }
}