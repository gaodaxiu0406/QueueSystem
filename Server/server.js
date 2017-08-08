let express = require('express');
let bodyParser=require('body-parser');
let app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/signup',function(req,res){
    res.send('注册');
});
app.post('/signup',function(req,res){
    console.log(req.body);
    res.send({msg:'aaa'});
});

app.get('/signin',function(req,res){
    res.send('登录');
});

app.post('/info',function(req,res){
    // console.log(req.body);
    let obj = {
        code:100,
        msg: 'ok',
        data:[
            '个人信息'
        ]
    };
    res.send(obj);
});
// let category = require('./routes/category');
// app.use('/user',user);
// app.use('/category',category);
app.post('/other',function(req,res){
    res.send('other');
});
app.listen(8000);
