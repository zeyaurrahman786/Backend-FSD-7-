const express = require('express');
const router = express.Router();
const User = require('../models/sinup');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken')

router.post('/sinup', async (req, res) => {
   let userInfo = req.body;
   console.log(userInfo);
   let userData = await User.findOne({ email: userInfo.email })
   if (!userData) {

      res.send('email not found in data base')
   }
   else {
      // console.log('s');

      const validPassword = await bcrypt.compare(userInfo.password, userData.password).catch((err) => {
         console.log('password not matching');
      })
      if (!validPassword) {
         res.send('Password not match')
         // console.log('not passord match');

      }
      else {
         console.log('passord match');

         let data = JSON.stringify(userData.email);
         let token = jwt.sign(data, 'PrivateTokenHaiHam')
         res.send({ token, userData })
      }

   }


})
module.exports = router;