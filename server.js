const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require('axios');
const cors = require('cors');
const path= require('path');
const routes = require('./routes')
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
app.use(express.static("build"));
app.use(express.static("public"));
app.use(cors());

    
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petAdoption", function() {
    // Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});