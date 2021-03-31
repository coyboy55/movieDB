// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// create new express app and save it as "router"
const router = express.Router();


//create the array of movies
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


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

// create a route for the movies/create

app.get('/movies/create', (req, res) => {
  
});


// create a route for the movies/read

app.get('/movies/read', (req, res) => {
  res.send('{status:200, data:'+JSON.stringify(movies)+'}');
  
});

// create a route for the movies/update

app.get('/movies/update', (req, res) => {
  
});


// create a route for the movies/delete

app.get('/movies/delete', (req, res) => {

});




// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});