const express = require('express');
const router = express.Router();
const User = require('../models/sinup');
 let bcrypt=  require('bcrypt')
router.post('/users',async(req,res)=>{
    const user=req.body
    console.log(req.body,"akansha")
    const checkEmail = await User.findOne({email: user.email})
    
    if(checkEmail){
        res.send('Email already Register')
    }
    else{
        user.password = await bcrypt.hash(user.password, 10)
        console.log(user.password);
        const newUser = new User({
            name:user.name,
            email:user.email,
            password:user.password
        })
        await newUser.save();
        res.send('account created sucessfully')

    }
})

module.exports = router