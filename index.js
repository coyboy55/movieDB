// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// create new express app and save it as "router"
const router = express.Router();


//create the array of movies
const movies = [
  {title: 'Jaws', year: 1975, rating: 8 },
  {title: 'Avatar', year: 2009, rating: 7.8 },
  {title: 'Brazil', year: 1985, rating: 8 },
  {title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
//creat db
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('C:/Users/coyboy/repos/MovieDB/MovieDB/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})
app.post('/info', (req, res) => {
 
  console.log(req.body);
});

// USER
MongoClient.connect(/* ... */)
  .then(client => {

    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('info')

   
  })



//let conString='mongodb+srv://fakhercode:<f@khercode#>@cluster0.dh1av.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
let uri = 'mongodb+srv://<fakhercode>:<f@khercode#>@<clustername>-rmp3c.mongodb.net/test?retryWrites=true&w=majority';
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    app.post('/movies/POST', (req, res) => {
      let rate1=4;
      let title1=req.query.title;
      let year1=req.query.year;
      if(req.query.rate){rate1=req.query.rate;}
      if(!req.query.title || !req.query.year || req.query.year.toString().length!=4 || !isNaN(req.query.year)){
        res.send('{status:404, error:true, message:message:you cannot create a movie without providing a title and a year}');
       }else{
        let movieA={title:title1,year:year1,rate:rate1};
        movies.push(movieA);
      
        res.send('{status:200, data:'+JSON.stringify(movies)+'}');
      }
    });
  })
  .catch(error => console.error(error))
// const bodyParser= require('body-parser');


// Make sure you place body-parser before your CRUD handlers!
//app.use(urlencoded({ extended: true }));

// All your handlers here...







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

app.get('/movies/POST', (req, res) => {
  
});


// create a route for the movies/read

app.get('/movies/GET', (req, res) => {

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

app.get('/movies/PATCH', (req, res) => {
  
});


// create a route for the movies/delete

app.get('/movies/DELETE/', (req, res) => {
 
});



// create a route for read by date

app.get('/movies/GET/by-date', (req, res) => {

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

// create a route for read by title

app.get('/movies/GET/by-title', (req, res) => {

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

// create a route for read by rating

app.get('/movies/GET/by-rating', (req, res) => {

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

// // create a route for read by ID
app.get('/movies/GET/:id', (req, res) => {
let ID=req.params.id;
if(ID<0 || ID>movies.length){
  res.send('{status:404, error:true, message:the movie <'+ID+'> does not exist}');
}
let movie=movies[ID];
res.send('{status:200, data:'+JSON.stringify(movie)+'}');
  
});


// // create a route for delete by ID
app.get('/movies/DELETE/:id', (req, res) => {
  let ID=req.params.id;
  if(ID<0 || ID>movies.length){
    res.send('{status:404, error:true, message:the movie <'+ID+'> does not exist}');
  }
  movies.splice(ID);
  res.send('{status:200, data:'+JSON.stringify(movies)+'}');
    
  });
  
  
// // create a route for update by ID
app.patch('/movies/PATCH/:id', (req, res) => {
  let ID=req.params.id;
  let title1=movies[ID].title;
  let rate1=movies[ID].rating;
  let year1=movies[ID].year;
  if(req.query.title){
   title1=req.query.title;}
  if(req.query.rate){
   rate1=req.query.rate;}
   if(req.query.year){
   year1=req.query.year;}

  if(ID<0 || ID>movies.length){
    res.send('{status:404, error:true, message:the movie <'+ID+'> does not exist}');
  }

  movies[ID].title=title1;
  movies[ID].rating=rate1;
  movies[ID].year=year1;


  res.send('{status:200, data:'+JSON.stringify(movies)+'}');
    
  });

// create a route for the movies/add

app.post('/movies/POST', (req, res) => {
  let rate1=4;
  let title1=req.query.title;
  let year1=req.query.year;
  if(req.query.rate){rate1=req.query.rate;}
  if(!req.query.title || !req.query.year || req.query.year.toString().length!=4 || !isNaN(req.query.year)){
    res.send('{status:404, error:true, message:message:you cannot create a movie without providing a title and a year}');
   }else{
    let movieA={title:title1,year:year1,rate:rate1};
    movies.push(movieA);
  
    res.send('{status:200, data:'+JSON.stringify(movies)+'}');
  }
});





//save into database

app.get('/save', (req, res) => {
 
});
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});










