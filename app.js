import express from "express";
import "dotenv/config"
import routes from "./src/routes/movie.routes.js";
import { conn } from "./src/config/database.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/movies", routes);

app.listen(port, () =>{
    console.log(`server corriendo en el puerto ${port}`)
});

conn()