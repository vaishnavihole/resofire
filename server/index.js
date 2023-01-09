import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URL, () => {
    console.log("Connected to mongo DB📦")
})

app.listen(process.env.PORT|| 5000,()=>{
    console.log('Server started running on port 5000📦');
})