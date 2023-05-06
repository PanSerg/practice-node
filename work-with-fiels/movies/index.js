const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");

const moviesPath = path.join(__dirname, "movies.json");
console.log(moviesPath);
// const moviesPath = path.relative("movies", "movies.json");
// console.log(moviesPath);

const getAllMovies = async() => {
    const data = await fs.readFile(moviesPath, "utf-8");
    return JSON.parse(data);
}

const getMovieById = async (id) => {
    const movies = await getAllMovies();
    const result = movies.find(item = item.id === id);
    return result || null;
}

const addMovie = async (data) => {
    const movies = await getAllMovies();
    const newMovie = {
        id: nanoid(),
        ...data,
    };
    movies.push(newMovie);
    await fs.writeFile(moviesPath, JSON.stringify(movies));
    return newMovie;
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
}