const express = require('express');
const app = express();

app.use('/home', express.static('public'));
app.use(express.urlencoded({ extended: true }));


let arr = [1, 2, 3, 4, 5];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todo', (req, res) => {
  res.json(arr);
});

app.post('/todo', (req, res) => {
  console.log(req.body, "Jejeje...");
  let{data} = req.body;
  let data1 = parseInt(data);
  arr.push(data1);
  res.send('Done!');
});

app.listen(3000); 