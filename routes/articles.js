const express = require('express');
const db = require("../models");

const router = express.Router();

router.get("/", function (req, res) {
    // TODO: Finish the route so it grabs all of the articles

});

// Route for grabbing a specific Article by id, populate it with it's note
router.get("/:id", function (req, res) {
    // TODO
    // ====

    // Finish the route so it finds one article using the req.params.id,
    // and run the populate method with "note",
    // then responds with the article with the note included
});

// Route for saving/updating an Article's associated Note
router.post("/:id", function (req, res) {
    // TODO
    // ====
    // save the new note that gets posted to the Notes collection
    // then find an article from the req.params.id
    // and update it's "note" property with the _id of the new note

});

module.exports = router;



// router.get("/", function (req, res) {
//     // TODO: Finish the route so it grabs all of the articles
//     db.Article.findAll({})
//         .then((dbArticle) => {
//             res.json(dbArticle);
//         })
//         .catch((error) => {
//             res.json(error);
//         });
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// router.get("/:id", function (req, res) {
//     // TODO
//     // ====
//     db.Article.findOne({ _id: req.params.id })
//         .populate("note")
//         .then((dbArticle) => {
//             res.json(dbArticle);
//         })
//         .catch((error) => {
//             res.json(error);
//         });
//     // Finish the route so it finds one article using the req.params.id,
//     // and run the populate method with "note",
//     // then responds with the article with the note included
// });

// // Route for saving/updating an Article's associated Note
// router.post("/:id", function (req, res) {
//     // TODO
//     // ====
//     // save the new note that gets posted to the Notes collection
//     // then find an article from the req.params.id
//     // and update it's "note" property with the _id of the new note
//     db.Note.create(req.body)
//         .then((dbNote) => {
//             return db.Article.findOneAndUpdate({ _id: req.params.id }), { note: dbNote._id }, { new: true }
//         })
//         .then((dbArticle) => {
//             res.json(dbArticle);
//         })
//         .catch((error) => {
//             res.json(error);
//         });
// });