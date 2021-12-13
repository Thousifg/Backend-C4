const express = require('express');
const router = express.Router();
const Seats = require('../models/seat.model')

router.get("/:id", async(req, res) => {
    const seats = await Seats.findById(req.params.id).lean().exec();
    console.log(seats);

    res.status(201).send(seats);
})


module.exports = router;