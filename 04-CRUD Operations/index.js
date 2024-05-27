const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



let bookData = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },

    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },

    {
      id: 3,
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
    },
    
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },

    {
      id: 5,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
    },

    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
    },

    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
    },

    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
    },

    {
      id: 9,
      title: "Ulysses",
      author: "James Joyce",
      year: 1988,
    },
]


app.get('/', (req, res) => {
    res.send("Welcome")
});

app.get('/book', (req, res) => {
    res.render('index', {bookData});
});



// Create
app.get('/book/new', (req, res) => {
    res.render('new');
});

app.post('/book', (req, res) => {
    // console.log(req.body, "Hii");
    let {title, author, year} = req.body;
    bookData.push({id:bookData.length, title, author, year});
    res.redirect('/book');
});


app.listen(8080);