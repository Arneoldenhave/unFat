const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');



const port = 3000;


//database conncetion
mongoose.connect('mongodb://localhost:/unFat');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected to db!');
});

//express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

//routes
let index = require('./server/routes/index');
let foods = require('./server/routes/foodRouter');

app.use('/', index);
app.use('/foods', foods);




//error handling
app.use((err, req, res, next) => {
    if (err) {
      
      console.log('Invalid Request data', err)
      res.send('Invalid Request data')
    } else {
      next()
    }
  });

  
//listener
app.listen(port, () => {
    console.log(`Runnig on port ${port}`);
});