import { Router } from "express";
//falta importar lo de controller

const router = Router()

router.get("/:/api/movies:", //aca iba los controladores de peliculas, terminar eso y pegar aca.getAll)
router.get("/api/movies/:id:",//getbyid (trae solo uno))
router.post("/api/movies:", //.create
router.put("/api/movies/:id:", //.update
router.delete("/api/movies/:id:", //.remove o creo q era delete fijarme en documentacion

//export default router (exportara todo de router)