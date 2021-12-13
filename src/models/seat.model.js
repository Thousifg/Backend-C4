const { Schema, model } = require("mongoose");

const seatSchema = new Schema({
    show: { type: Schema.Types.ObjectId, ref: "shows"}
})

module.exports = model("seats", seatSchema);