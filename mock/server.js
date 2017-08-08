const fs=require('fs');
const path=require('path');
const url=require('url');
const http=require('http');
let express = require('express');
let app=express();
app.use('/itemlist',(req,res)=>{
   fs.readFileSync('./orderList.js')
});
app.listen(8000,()=>{
    console.log("8000 is done")
});
