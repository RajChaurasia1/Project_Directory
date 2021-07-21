let express = require('express');
let app = express();
let mongoose = require('mongoose');
let cookieParser = require('cookie-parser');
let id = 1;
let User = require('./models/posts').User;
let auth = require('./controllers/auth');
let postsRouter =require('./routes/posts');
let usersRouter = require('./routes/login');



mongoose.connect('mongodb://localhost/users',{useNewUrlParser: true});




app.use(express.json());
app.use(express.static('public'));
app.use('/posts', postsRouter);
app.use('/users',usersRouter);
app.set('view engine','ejs');
app.use(cookieParser());
// app.get('/exmp',async (req,resp)=>{
//     let field = req.body.field;
//     let post =await User.find()
//                         .where('field').equals();
//     resp.render('exmp',{post});
//     console.log(post);
// })

app.get('',async(req,resp)=>{
    resp.render('index');
})
app.get('/',async(req,resp)=>{
    resp.render('index');
})
app.get('/exmp/android',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Android Development');
    if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);
}
})
app.get('/exmp/ml',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Machine Learning');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/dl',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Deep Learning');
    if(post.length===0)
     {
         resp.render('supportus');
     }
   else
   { 
    resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/core',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Departmental Core Projects');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/webdev',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Web Development');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/game-dev',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Game Development');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    //console.log(post);
}
})
app.get('/exmp/misc',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Miscellaneous');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    //console.log(post);
}
})
app.get('/exmp/robotics',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Robotics');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/idea',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Other Ideas');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/hpc',async(req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('hpc');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})

app.get('/exmp/android',async (req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('android');
    if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);
}
})
app.get('/exmp/dl',async (req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Deep Learning');
    if(post.length===0)
     {
         resp.render('supportus');
     }
   else
   { 
    resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/ml',async (req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Machine Learning');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/webdev',async (req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Web Development');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})
app.get('/exmp/core',async (req,resp)=>{
    let field = req.body.field;
    let post =await User.find()
                        .where('field').equals('Departmental Core Projects');
      if(post.length===0)
    {
        resp.render('supportus');
    }
    else
    {resp.render('exmp',{post});
    console.log(post);}
})

app.get('/projects',async (req,resp)=>{
    resp.render('projects');
})

app.get('/public/supportus.html', (req,resp)=>{
    let token = req.cookies['auth_token'];
    if(token&&auth.checkToken(token))
     resp.render('supportus');
     else
     resp.redirect('/login');
})

app.get('/exmp/supportus', async(req,resp)=>{
     resp.render('supportus');
     
})


app.get('/login', (req,resp)=>{
    
     resp.render('login');
})
app.listen(2000, ()=>console.log('Listening to 2000...'));