const express =require('express');
const mongoose=require('mongoose')

const app=express();
const port=3000;

mongoose.connect('mongodb://localhost/todo-express',)

app.use(express.urlencoded({extended:true})) 
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(require("./routes/index"))
app.use(require("./routes/todos"))

app.listen(port,()=>{
    console.log("listeng at :"+port)
})