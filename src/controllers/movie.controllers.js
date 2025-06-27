//falta exportar el modelo de pelicula o movie 


//para mostrar todos 
const getAll = async(req, res) => {
    const data = response.json()
    if (!data) //*si data es flso*//
    {
       return res.status(400).json({message: "no estan las peliculas", data}) 
    }
}

//solo 1 peli

const getById = async(req, res) => {
    const { id } = req.params
    const response = await User.findByPk(id)
    if (!response) {
        return res.status(404).json({ message: "peli no encontrada" })
    }
    return res.status(200).json(response)
}

//crear una 

const create = async(req, res) => {
    const { title,
           director,
           duration,
           genre, 
           descripcion } = req.body
    if (!title || !director || !duration ||!genre || !descripcion) {
        return res.status(400).json({ message: "completar los campos" })
    }
    const response = await User.create({ title, director, duration, genre, descripcion })
    return res.status(200).json(response)
}


//agregar  pelicula

const update = async(req, res) => {
    const { id } = req.params
    const { title, director, duration, genre, descripcion } = req.body
    if (!title || !director || !duration ||!genre || !descripcion) {
        return res.status(400).json({ message: "faltan los datos" })
    }
    const response = await User.create({ title, director, duration, genre, descripcion })
    if (response[0] === 0) {
        return res.status(404).json({ message: "pelicula inexistente" })
    }
    return res.status(200).json({ message: "peli aagregada" })
}


//remocion

const remove = async(req, res) => {
    const { id } = req.params
    const response = await User.destroy({ where: { id } })
    if (response === 0) {
        return res.status(404).json({ message: "pelicula removida" })
    }
    return res.status(204).send()
}
export const characterController = {
    getAll,
    getById,
    create,
    update,
    remove
}
