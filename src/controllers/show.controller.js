const express = require('express');
const router = express.Router();
const Show = require('../models/shows.model');
const Theatre = equire('../models/theatre.model');

router.get("/seats/:id", async(req, res) => {
    const show = await Show.find({movie: req.params.id}, { "total_seats": true}).lean().exec();
    console.log(show);

    res.status(201).send(show);
})

router.get("/:id", async(req, res) => {
    const show = await Show.find({movie: req.params.id}).populate('movie').populate('screen').lean().exec();
    console.log(show);

    res.status(201).send(show);
})

router.post("/", async(req, res) => {
    const show = await Show.create(req.body);
    console.log(show);

    res.status(201).send(show);
})

router.get("/nearest/:location", async(req, res) => {
    let theatre = await Theatre.find({"location": req.params.location}).lean().exec();
    console.log(theatre);

    res.status(201).send(theatre);
})



module.exports = router;
