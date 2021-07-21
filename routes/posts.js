let User = require('../models/posts').User;
let authMiddleware = require('../middleware/auth');
let uniqid  = require('uniqid');

let express = require('express');
let router = express.Router();
let id = 1;
// router.get('/',async(req,resp)=>{
//     let posts = await User.find();
//     resp.send(posts);

// })
router.post('/',async (req,resp)=>{
    let reqBody = req.body;
    let newUser = new User({
        id:id++,
        name:reqBody.name,
        email:reqBody.email,
        anonymous:reqBody.anonymous,
        title:reqBody.title,
        field:reqBody.field,
        description:reqBody.description,
        sources:reqBody.sources,
        output:reqBody.output
    })
    await newUser.save();
    resp.send('Created');
})
module.exports = router;