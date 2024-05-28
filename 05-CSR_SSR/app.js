const express = require('express');
const app = express();

app.use('/home', express.static('public'));


let arr = [1, 2, 3, 4, 5];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todo', (req, res) => {
  res.json(arr);
});

app.listen(3000);