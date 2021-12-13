const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

router.post("/", async(req, res) => {
    const movie = await Movie.create(req.body);
    console.log(movie);

    res.status(201).send(movie);
})

router.get("/:actor", async(req, res) => {
    const movie = await Movie.find({actor: req.params.actor}).lean().exec();
    console.log(movie);

    res.status(201).send(movie);
})

module.exports = router;