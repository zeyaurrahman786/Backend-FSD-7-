// console.log("Hello world!");






// let joke = require ('give-me-a-joke')
// console.log(joke);

// joke.getRandomDadJoke ((jokes) => {
//     console.log(jokes);
// })






// Asynchronous Methods :----------------------------------------------------------------

// Create File :-)

// let fs = require ("fs");
// fs.writeFileSync("File.txt", "Hello world!");





// Append File :-)

// let fs = require ("fs");
// fs.appendFileSync("NewFile.txt", " How are you ?");





// Rename File :-)

// let fs = require ("fs");
// fs.renameSync("File.txt", "NewFile.txt");





// Read File :-)

// let fs = require ("fs");
// let data = fs.readFileSync("File.txt");
// console.log(data.toString);




// Delete File :-)

// let fs = require ("fs");
// fs.unlinkSync("NewFile.txt");






// Synchronous Methods :----------------------------------------------------------------

// Create File :-)

let fs = require("fs");
fs.writeFile("index.html", "<h1> Hello World </h1>", (err) =>{
    if(err) throw err;
    console.log("File created successfully");
})





// Read File :-)

// fs.readFile("index.html", (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })