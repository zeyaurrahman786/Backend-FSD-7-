// Restful API :-)

const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


let comments = [
    {
        id:0,
        username:"Sam",
        comment:"chitkara is a nice university 0"
    },
    {
        id:1,
        username:"g2",
        comment:"chitkara is a nice university 1"
    },
    {
        id:2,
        username:"vohra",
        comment:"chitkara is a nice university 2"
    }
  ]

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/blogs', (req, res) => {
  res.render('index', {comments});
});

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

app.post('/blog', (req, res) => {
    console.log(req.body, "Hiiiii");
    let{username, comment} = req.body;
    comments.push({id:comments.length, username, comment});
    res.redirect('/blogs');
    // res.send("Send");
});1

app.listen(3000);