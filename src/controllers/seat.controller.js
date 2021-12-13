const express = require('express');
const router = express.Router();
const Show = require('../models/shows.model')

router.post("/:showId/:noOfSeats", async(req, res) => {
    const show = await Show.findById(req.params.showId).lean().exec();
    const available = show.total_seats;

    if(available >= +req.params.noOfSeats) {
        res.status(200).send("seats booked")
    }
    else res.status(500).send("Required no of seats are not available");
})


module.exports = router;    