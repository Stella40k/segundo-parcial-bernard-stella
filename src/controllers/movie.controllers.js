import { Movie} from '../models/movie.model.js';


export const controllers = {}

controllers.GetAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        if (movies.length === 0) {
            return res.status(404).json({ message: "No se encontraron películas" });
        }
        res.status(200).json(movies);
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        res.status(500).json({ error: "Error al obtener las películas" });
    }
}

controllers.GetMovieById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID de película es requerido" });
    }
    try {
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error("Error al obtener la película:", error);
        res.status(500).json({ error: "Error al obtener la película" });
    }
}

controllers.CreateMovie = async (req, res) => {
    const { title, director, duration, genere, description } = req.body;
    if (!title || !director || !duration || !genere) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        const movieName = await Movie.findOne({where: { title: title }})
        if (movieName) {
            return res.status(400).json({ message: "La película ya existe" });
        }
        const newMovie = await Movie.create({ title, director, duration, genere, description });
        res.status(201).json(newMovie);
    } catch (error) {
        console.error("Error al crear la película:", error);
        res.status(500).json({ error: "Error al crear la película" });
    }
}

controllers.UpdateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, director, duration, genere, description } = req.body;
    try {
        const movieName = await Movie.findOne({ where: { title: title } });
        if (movieName) {
            return res.status(400).json({ message: "La película ya existe" });
        }
    if (!id || !title || !director || !duration || !genere) {
        return res.status(400).json({ message: "ID de película y todos los campos son obligatorios" });
    }
    const movie = await Movie.findByPk(id);
    if (!movie) {
        return res.status(404).json({ message: "Película no encontrada" });
    }
        movie.title = title;
        movie.director = director;
        movie.duration = duration;
        movie.genere = genere;
        movie.description = description;
        await movie.save();
        res.status(200).json(movie);
    } catch (error) {
        console.error("Error al actualizar la película:", error);
        res.status(500).json({ error: "Error al actualizar la película" });
    }
}
controllers.DeleteMovie = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "ID de película es requerido" });
    }
    try {
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        await movie.destroy();
        res.status(200).json({ message: "Película eliminada correctamente" });
    } catch (error) {
        console.error("Error al eliminar la película:", error);
        res.status(500).json({ error: "Error al eliminar la película" });
    }
}