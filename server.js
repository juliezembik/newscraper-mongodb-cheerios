const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server


// Require all models
const articleRouter = require('./routes/articles');
const scrapeRouter = require('./routes/scrape');

const PORT = 3000;

// Initialize Express
const app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
const databaseUrl = process.env.MONGODB_URI || `mongodb://localhost/mongoHeadlines`;
mongoose.connect(databaseUrl, { useNewUrlParser: true });
mongoose.connection.once('connected', () => {
  console.log('mongoose connected to:', databaseUrl);
});

mongoose.connection.on('error', function (err) {
  console.log('mongoose connection error: ', err);
});

// Routes

app.use('/articles', articleRouter);
app.use('/scrape', scrapeRouter);



// Route for getting all Articles from the db

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
