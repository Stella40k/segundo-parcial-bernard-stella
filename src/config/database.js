import { Sequelize } from "sequelize";
import "dotenv/config"

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_USER,
    {
        localhost: process.env.DB_HOST,
        dialect:  process.env.DB_DIALECT   
    }

);

export const connect = async () =>{
    try {
        await sequelize.authenticate();
        console.log("Conexion exitosa");
    } catch (error) {
        console.log("Error al conectar con la base de datos", error);
    }
};