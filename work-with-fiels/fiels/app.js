const { error } = require("console");
const fs = require("fs");

fs.readFile("./fiels/file.txt", (error, date) => {
    console.log(error);
    console.log(data);
});