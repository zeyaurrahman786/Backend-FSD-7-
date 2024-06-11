let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/model');
let bcrypt = require('bcrypt')
let app = express();



mongoose.connect('mongodb://127.0.0.1:27017/signUp')
.then(()=>{
    console.log("Connected to MongoDB Successfully");
})
.catch((err)=>{
    console.log(err);
})



app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome');
});

app.post('/signup', async (req,res)=>{
    console.log(req.body);
    let userData = req.body;
    let {email} = req.body;
    let user = await User.findOne({email});
    
    if(user){
        res.send('User already exists');
    }
    else{
        userData.password = await bcrypt.hash(userData.password, 10)
        console.log(userData.password);

        let dbUser = new User ({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password:  userData.password,
        });

        await dbUser.save();
        res.send('User created successfully');
    }

    // res.send('Createddddddd');
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});