import express from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
/* app.use("/api", routes);
 */
app.listen(PORT, () =>{
    console.log(`Se escucha el pueto en ${PORT}`)
})