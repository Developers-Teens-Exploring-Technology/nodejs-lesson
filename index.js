const express = require('express');

//declare our server 
const app = express(); 
const port = 4200; 

app.get('/', function(req,res){

    res.send("HELLO BOYS!");
});
app.get('/home',function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, ()=> {
    console.log('Listening on port: ' + port);
});
