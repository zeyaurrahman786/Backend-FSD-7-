// Restful API :-) CRUD Operations 

const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 


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

app.get('/blog', (req, res) => {
  res.render('index', {comments});
});



// Create comment

app.get('/blog/new', (req, res) => {
  res.render('new');
});

app.post('/blog', (req, res) => {
    console.log(req.body, "Hiiiii");
    let{username, comment} = req.body;
    comments.push({id:comments.length, username, comment});
    res.redirect('/blog');
    // res.send("Send");
});



// Edit comments

app.get('/blog/:id', (req, res) => {
  let {id} = req.params;
  console.log(id, "iddddd");
  

let data = comments.find((data)=>{
  return data.id == id;
})
console.log(data, "dataaa");
res.render('edit', {data});
});



app.patch('/blog/:id',(req,res)=>{
  let {id} = req.params;
  console.log(id, "ej");

  let{username, comment} = req.body;
  
  let data = comments.find((data)=>{
    return data.id == id;
  })
  console.log(data, "dataaa");

  data.comment = comment;
  data.username = username;
  res.redirect('/blog');
});



// Delete comments

app.delete('/blog/:id',(req,res)=>{
  let {id} = req.params;

  let newData = comments.filter((data)=>{
    return data.id!=id;
  })

  comments = newData
  res.redirect('/blog');
});

app.listen(3000);