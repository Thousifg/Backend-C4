const { Schema, model } = require("mongoose");

const showSchema = new Schema({
    timing: { type: String, required: true},
    movie: { type: Schema.Types.ObjectId, ref:"movies"},
    screen: { type: Schema.Types.ObjectId, ref:"screens"},
    total_seats: { type: Number, required: true},
})

module.exports = model("shows", showSchema);