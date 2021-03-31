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

  //by search but i think u dont mean that. so i creat many root 
  /*
  if (req.query.s=='by-date'){
  function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
}else if (req.query.s=='by-title'){
  function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
}
  let moviesR=movies.sort( compare );
*/
  res.send('{status:200, data:'+JSON.stringify(movies)+'}');
  
});

// create a route for the movies/update

app.get('/movies/update', (req, res) => {
  
});


// create a route for the movies/delete

app.get('/movies/delete/', (req, res) => {
 
});



// create a route for read by date

app.get('/movies/read/by-date', (req, res) => {

  function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
  let moviesR=movies.sort(compare);
   res.send('{status:200, data:'+JSON.stringify(moviesR)+'}');
});

// create a route for read by date

app.get('/movies/read/by-title', (req, res) => {

  function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  let moviesR=movies.sort(compare);
   res.send('{status:200, data:'+JSON.stringify(moviesR)+'}');
});

// create a route for read by date

app.get('/movies/read/by-rating', (req, res) => {

  function compare( a, b ) {
    if ( a.rating < b.rating ){
      return -1;
    }
    if ( a.rating > b.rating ){
      return 1;
    }
    return 0;
  }
  let moviesR=movies.sort(compare);
   res.send('{status:200, data:'+JSON.stringify(moviesR)+'}');
});





// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});










