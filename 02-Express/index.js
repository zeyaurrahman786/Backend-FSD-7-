let express = require('express');

let app = express();    

// app.use((req,res) =>{
//     res.send('Hello This is our server!!!!');
// })


// Routing

app.get('/', (req, res)=>{
    res.send("Zeyaur Rahman")
})

app.get('/home', (req, res)=>{
    res.send("Welcome to my Home !")
})

app.get('/profile', (req, res)=>{
    res.send("Welcome to my profile !")
})

app.get('/about', (req, res)=>{
    res.send("Do you know about me !")
})

app.get('/home/profile/about', (req, res)=>{
    res.send("I am a Web Developer")
})

// app.get('*', (req, res)=>{
//     res.send("Matlab Kuch bhi !")
// })

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})