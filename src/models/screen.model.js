const { Schema, model } = require("mongoose");

const screenSchema = new Schema({
    name: { type: String, required: true},
    theatre: { type: Schema.Types.ObjectId, ref:"theatres" }
})

module.exports = model("screens", screenSchema);