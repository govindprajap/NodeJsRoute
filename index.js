import app from "./app.js";
import mongoose from "mongoose";
const port = 3000;
// batabse connection
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');
(async()=>{
    try {
        // bd connection
        await mongoose.connect('bdstring')
        console.log('connection successfully')
        app.on("error", (err)=>{
            console.log('ERROR', err)
            throw err;
        })
        app.listen(port, ()=>{
            console.log(`listing on port ${port}`)
        })
        
    } catch (error) {
        console.log("Error", error)
        throw error;
    }
})()

// app.listen(port, ()=>{
//     console.log(`Server is running at port ${port}`)
// })
