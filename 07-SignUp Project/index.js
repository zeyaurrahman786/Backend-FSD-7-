let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/model');
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken');
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






// SignUp API

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






// LogIn API

app.post('/login', async (req,res)=>{
    console.log(req.body);
    let userInfo = req.body;

    let loginData = await User.findOne({email: userInfo.email})
    if(!loginData){
        res.send('User nahi mila hai');
    }
    else{
        // res.send("User mil gya hai");

        let validPassword = await bcrypt.compare(userInfo.password, loginData.password);
        if(!validPassword){
            res.send('Password is incorrect');
        } 
        else{

        // Generate Token 

        let data = JSON.stringify(loginData);
        let token = jwt.sign(data, 'ASDFGHJKL')
        console.log(token, "Token generated");
        
        // res.send('Logged in successfully');
            res.send({token, loginData});
        }
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});