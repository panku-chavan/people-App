const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const app=require('./app');
const port= 5000;

const Database_url='mongodb://127.0.0.1:27017/test';


mongoose.connect(Database_url,{useNewUrlParser: true,useUnifiedTopology: true });

const db=mongoose.connection;
db.on('error',(err)=>console.log(err));
db.once('open',()=>console.log("Connected to database"));


app.listen(port,()=>{
    console.log("App listening on port",port);
})
