const { error } = require("console");
const fs = require("fs");

const func = async () => {
    // const buffer = await fs, readFile("./file.txt")
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile("./file.txt", "utf-8");
    // console.log(text);
    // const result = await fs.appendFile("./file.txt", "\nДописуем слово");
    // console.log(result);
    const result = await fs.writeFile("./file.txt", "Callback hell");
    console.log(result);
}

func();

// fs.readFile("./fiels/file.txt", (error, date) => {
//     console.log(error);
//     console.log(data);
// });