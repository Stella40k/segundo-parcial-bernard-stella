import { Sequelize } from "sequelize";
import"dotenv/config";

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT 
});


export const conn = async () =>{
    try{
        //poner "true" para que se creen la tabla con sus campos luego 
        await sequelize.sync({force:false})
        console.log("conexion exitosa a bd")
    }catch(error){
        console.log("hubo un error", error)
    }
}