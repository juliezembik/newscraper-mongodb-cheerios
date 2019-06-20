//boiler plate requirements
const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models');


//Get Notes

router.get('/notes/:id', (req, res) => {
    db.Article.findOne({ _id: req.params.id })
        .populate("note")
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            console.log('error in getting note', error);
            res.json(error);
        });
});




module.exports = router;