const express = require('express');
const connect = require("./configs/db");

const { register } = require("./controllers/user.controller");
const { login } = require("./controllers/user.controller");
const  seatController = require("./controllers/seat.controller");
const  seatsController = require("./controllers/seats.controller");
const  movieController = require("./controllers/movie.controller");
const  showController = require("./controllers/show.controller");
const  theatreController = require("./controllers/theatre.controller");
const  screenController = require("./controllers/screen.controller");


const app = express();  
app.use(express.json());

app.use("/register", register);
app.use("/login", login);
app.use('/seat', seatController);
app.use('/movies', movieController);
app.use('/shows', showController);
app.use('/seats', seatsController);
app.use('/theatre', theatreController);
app.use('/screen', screenController);

app.listen(4444, async() => {
    await connect();
    console.log("Listening to port 4444");
});