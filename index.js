const express = require('express');

//declare our server 
const app = express(); 
const port = 3200; 


app.get('/', function(req,res){
    res.send("HELLO BOYS!");
});

app.get('/home',function(req, res){
    res.sendFile(__dirname + '/index.html');
})
app.post('/home', function(req,res){
    res.send("POST() METHOD ACTIVATED");
})
app.listen(port, function(){
    console.log('Listening on port: ' + port);
});

