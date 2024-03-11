 const express= require('express');
 const app= express();

 const port= 3000

 const name= "joshua";


 app.set("view engine", "ejs")


app.get('/' ,function(req, res){
    console.log("ur ON HOME PAGE");
    res.render("index");
});

app.get('/about', function(ereq,res){
    console.log("i am on about page");
    res.render("about",{name: name});
});

app.use(function(req, res){
    console.log("error");
    res.render('error')
})

 


 app.listen(port, function(){
    console.log("listening on port 3000")
 })