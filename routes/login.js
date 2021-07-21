let Log = require('../models/users').Log;
let auth = require('../controllers/auth');
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

router.post('/login',async(req,resp)=>{
  let email = req.body.email;
  let password = req.body.password;
  let user =await Log.find()
               .where({email:email});
        // console.log(user);
        if(user.length>0)
        {   let comparisonResult = await bcrypt.compare(password,user[0].password)
            if(comparisonResult)
            { let token = auth.generateToken(user[0]);
              resp.cookie('auth_token',token);
              resp.send({
                  redirectURL : '/public/supportus.html'
              });
            }
            else
           {    resp.status(400);
                resp.send('Rejected');}
        }
        else{
            resp.status(400);
            resp.send('Rejected');
        }
})


router.post('/register',async(req,resp)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user =await Log.find()
                 .where({email:email});
  
          if(user.length === 0)
          {  let encryptedPass =  await bcrypt.hash(password,12);
              
            let newUser = new Log({
              email:email,
              password:encryptedPass
          })
          await newUser.save();
             resp.send('Done');
          }
          else{
              resp.send('Rejected');
          }
  })

  module.exports = router;