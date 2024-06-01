const express = require('express');
const app = express();

app.use('/home', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


let arr = [1, 2, 3, 4, 5];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todo', (req, res) => {
  if(req.xhr){
    res.json(arr);
  }
  else {
    res.render('index', {arr});
  }
});

app.post('/todo', (req, res) => {
  console.log(req.body, "Heyyyyy...");
  let{data} = req.body;
  let data1 = parseInt(data);
  arr.push(data1);
  res.send('Doneeee!');
});

app.listen(3000); 