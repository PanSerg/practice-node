const movieService = require("./movies");

const invorkeAction = async ({action, id, title, director}) => {
    switch (action) {
        case "list":
            const getAllMovies = await movieService.getAllMovies();
            return console.log(getAllMovies);
        case "getMovieById":
            const oneMovie = await movieService.getMovieById(id);
            return console.log(oneMovie);
        case "addMovie":
            const newMovie = await movieService.addMovie({ title, director });
            return console.log(newMovie);
        default:
            console.log("Unknown action");
    }
}

// invorkeAction({ action: "list" });
// invorkeAction({ action: "getMovieById", id: "u9kgwNWGi3uUUwh0b8V49" });
invorkeAction({action: "addMovie", title: "Avatar: the way of water", director: "James cameron"})


// const { error } = require("console");
// const fs = require("fs");

// const func = async () => {
    // const buffer = await fs, readFile("./file.txt")
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile("./file.txt", "utf-8");
    // console.log(text);
    // const result = await fs.appendFile("./file.txt", "\nДописуем слово");
    // console.log(result);
//     const result = await fs.writeFile("./file.txt", "Callback hell");
//     console.log(result);
// }

// func();

// fs.readFile("./fiels/file.txt", (error, date) => {
//     console.log(error);
//     console.log(data);
// });