import express from "express";
const app = express();
app.get('/', (req, res)=>{
    res.send("hello World this is your first program")

})
app.get('/facebook', (req, res)=>{
    res.send("<h1>Hello facebook</h1>");
})
export default app;