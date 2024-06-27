let express = require('express')
let mongoose = require('mongoose');
let sinupRoutes = require('./routes/login');
let loginRoutes = require('./routes/user')
let cors = require('cors')
// restraurant
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://127.0.0.1:27017/mydatabse').then(() => {
    console.log('connect database');
}).catch(() => {
    console.log("Not connect database");
})
app.get('/', (req, res) => {
    res.send('Hellow')
})
app.use('/api', sinupRoutes)
app.use('/api', loginRoutes)

app.listen(4000, () => {
    console.log("server is running on 4000");
})

// // authorization
// // payment gatway
// // cookies