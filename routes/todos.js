
const router =require('express').Router()
const express=require('express')
const Todo =require('../models/Todo')

router.use(express.urlencoded({ extended : true }));


router.post("/add/todo",(req,res)=>{
    const todo =req.body.todo ;
    const newTodo = new Todo({ todo });

   
    newTodo.save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });


module.exports=router;