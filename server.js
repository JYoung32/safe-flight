const express = require('express');
const passport = require('passport');
require('dotenv').config()
require('./models/Users');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
);


app.use(cors()); //handles communication between react and server for data transfer
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));
app.use('/api', router);
const PORT = process.env.PORT || 3001;
app.listen(PORT);