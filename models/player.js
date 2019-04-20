const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    key: Number,
    rank: Number,
    name: String,
    score: String,
    thru: String,
    today: String,
    R1: Number,
    R2: Number,
    R3: Number,
    R4: Number
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
