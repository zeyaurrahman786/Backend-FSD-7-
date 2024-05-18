// let express = require('express');

// let app = express();    

// // app.use((req,res) =>{
// //     res.send('Hello This is our server!!!!');
// // })


// // Routing :-)

// app.get('/', (req, res)=>{
//     res.send("Zeyaur Rahman")
// })

// app.get('/home', (req, res)=>{
//     res.send("Welcome to my Home !")
// })

// app.get('/profile', (req, res)=>{
//     res.send("Welcome to my profile !")
// })

// app.get('/about', (req, res)=>{
//     res.send("Do you know about me !")
// })

// app.get('/home/profile/about', (req, res)=>{
//     res.send("I am a Web Developer")
// })

// // app.get('*', (req, res)=>{
// //     res.send("Matlab Kuch bhi !")
// // })

// app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// })











// // Dynamic Routing :-)

// let express = require('express');

// let app = express();    

// app.get('/', function(req, res){
//     res.send("Hello World!");
// })

// // app.get('/:r/:a', (req, res) => {
// //     let {a} = req.params;
// //     console.log(req.params, "Hiiiiiii");
// //     res.send(a);
// // })

// app.get('/:r/:a', (req, res) => {
//     let {r,a} = req.params;
//     res.send(`${r} ${a}`); 
// })

// app.listen(3000, (req, res) => {
//     console.log("Server listening on port 3000");
// });











// // Query Parameters :-)

// let express = require('express');

// let app = express();    

// // app.get('/search', function(req, res){
// //     console.log("Searching...");
// //     console.log(req.query);
// //     res.send("Hello World!");
// // })

// app.get('/search', function(req, res){
//     console.log("Searching...");
//     console.log(req.query);
//     let {firstName, lastName} = req.query;
//     res.send(`${firstName} ${lastName}`);
// })

// app.listen(3000, (req, res) => {
//     console.log("Server listening on port 3000");
// });



// // http://localhost:3000/search?firstName=Zeyaur&lastName=Rahman
// // { firstName: 'Zeyaur', lastName: 'Rahman' }













// Server-Side-Rendering :-)

// let express = require('express');

// let app = express();    

// app.set('view engine', 'ejs');

// app.get('/', (req, res) =>{
//     res.render('index');
// })

// app.listen(3000, (req, res) => {
//     console.log("Server listening on port 3000");
// });










// let express = require('express');

// let app = express(); 

// let path = require('path');

// app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) =>{
//     res.render('index');
// })

// app.get('/random', (req, res) =>{
//     let randomNum = Math.floor(Math.random() * 100);
//     res.render('random', {randomNum});
// })

// app.get('/array', (req, res) =>{
//     let arr = ['Hello', 'Hii', 'Good Morning', 'How are you?'];
//     res.render('array', {arr});
// })

// app.listen(8000, (req, res) => {
//     console.log("Server is listening on port 8000");
// });











// Form Get vs Post :-)

let express = require('express');
let app = express(); 
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index');
})

// Form -> GET
app.get('/user', (req, res) => {
    console.log(req.query, "Hellooo!");
    let {name, email, password} = req.query;
    res.send(`${ name } ${ email } ${ password }`);
    // res.send("Done!");
})

// Form -> POST
app.post('/user', (req, res) => {
    console.log(req.body, "Hiiiii");
    res.send("Form Done!");
})

app.listen(5000);