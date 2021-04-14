const express=require('express')

const app=express()

app.use(express.static('public'))
app.set("view engine", "ejs");


var port= process.env.PORT||3000;

app.get("/",async(req,res)=>{
    try{
        res.render("index")
    }catch(error){
        res.send(`there is an error ${error}`)
    }
})
app.get("/herokucmd",async(req,res)=>{
    try{
        res.render("herokuCmd")
    }catch(error){
        res.send(`there is an error ${error}`)
    }
})
app.get("/gitcmd",async(req,res)=>{
    try{
        res.render("gitCmd")
    }catch(error){
        res.send(`there is an error ${error}`)
    }
})
app.listen(port,()=>{console.log("server is started!")})