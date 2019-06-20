const axios = require("axios");
const express = require('express');
const db = require("../models");
const router = express.Router();
const cheerio = require("cheerio");


// A GET route for scraping the echoJS website
router.get("/", function (req, res) {
    // First, we grab the body of the html with axios
    axios
        .get("https://www.staradvertiser.com/category/breaking-news/")
        .then((response) => {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);

            $("article").each(function (i, element) {
                // Save an empty result object
                var result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.title = $(this)
                    .find('h6')
                    .text()
                    .trim();

                result.link = $(this)
                    .find('h6')
                    .children('a')
                    .attr('href')
                    .trim();

                result.summary = $(this)
                    .find('p')
                    .text();

                // Create a new Article using the `result` object built from scraping
                db.Article.updateOne({ title: result.title }, result, {
                    upsert: true,
                    setDefaultsOnInsert: true
                })
                    .catch((error) => {
                        res.json(error);
                    });
            });
            // Send a message to the client
            return true;
        })
        .then(() => {
            db.Article.find({ saved: false }).then((articles) => {


                res.render("index", { Articles: articles });
            });
        })
        .catch((error) => {
            console.log('Error in /scrape', error);
            res.json(error);
            
        })
});


module.exports = router;