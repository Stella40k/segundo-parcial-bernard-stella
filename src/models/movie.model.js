import mysql from "mysql2";

async function main() {

const connection = await mysql.createConnection({
    DB_NAME: "movies",
    DB_USER: "root",
    DB_PASSWORD: "",
    DB_HOST: "localhost",
    DB_DIALECT: "mysql",
});    
};
