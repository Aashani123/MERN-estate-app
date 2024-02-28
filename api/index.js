import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// connected to database
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err)
});


const app = express();

// running server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

