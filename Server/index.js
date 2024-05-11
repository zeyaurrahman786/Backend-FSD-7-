// console.log("Hello world!");






let joke = require ('give-me-a-joke')
console.log(joke);

joke.getRandomDadJoke ((jokes) => {
    console.log(jokes);
})