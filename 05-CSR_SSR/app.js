const express = require('express');
const app = express();

app.use('/home', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);