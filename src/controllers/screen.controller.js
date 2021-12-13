const express = require('express');
const router = express.Router();
const Screen = require('../models/screen.model')

router.post("/", async(req, res) => {
    const screen = await Screen.create(req.body);
    console.log(screen);

    res.status(201).send(screen);
});

module.exports = router;