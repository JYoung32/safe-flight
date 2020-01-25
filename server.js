const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!");
});

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project3",
  {
    useMongoClient: true
  }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT);