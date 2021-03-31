// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// create new express app and save it as "router"
const router = express.Router();


// server configuration
const PORT = 3000;

// create a route for the app
app.get('/', (req, res) => {
  res.send('OK');
});


// create a route for the test
app.get('/test', (req, res) => {
  res.send('{status:200, message:"ok"}');
});

// create a route for the hello/<ID>


app.get('/hello/:id', (req, res) => {
  res.send('{status:200, message:hello,'+req.params.id+'}');
});
// create a route for the hello/ID=""
app.get('/hello', (req, res) => {
  res.send('{status:200, message:hello,}');
});

// create a route for the search
app.get('/search', (req, res) => {
    if (req.query.s){
      res.send('{status:200, message:"ok", data:'+req.query.s.toString()+'}');
  }else{
    res.send('{status:500, error:true, message:"you have to provide a search"}');
  }

});
// create a route for the time
var time= new Date(Date.now());
app.get('/time', (req, res) => {
  res.send('{status:200, message:<'+time.getHours()+':'+time.getMinutes()+'>}');
});


// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});