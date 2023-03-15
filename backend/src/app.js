
const express= require('express');
const allRoutes=require('./Routes/allRoutes');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
    res.send("hello")
})

app.use('/',allRoutes);

module.exports=app;