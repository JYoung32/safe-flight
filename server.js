const express = require('express');
const passport = require('passport');
require('dotenv').config()
require('./models/Users');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD

=======
>>>>>>> 0b917f706c5703edc83e021fda3fa820cd430550
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


//connect to our mongoDB and log it to the console
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

mongoose.connection.on('connected', () =>{
  console.log('Mongoose is connected.');
})

<<<<<<< HEAD

app.use(cors()); //handles communication between react and server for data transfer
=======
>>>>>>> 0b917f706c5703edc83e021fda3fa820cd430550
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT);