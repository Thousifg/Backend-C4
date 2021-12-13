const express = require('express');
const router = express.Router();
const Theatre = require('../models/theatre.model')

router.post("/", async(req, res) => {
    const theatre = await Theatre.create(req.body);
    console.log(theatre);

    res.status(201).send(theatre);
})

module.exports = router;