const mongoose = require('mongoose');

const JokesSchema = mongoose.Schema({
    setup: {
        type:String,
        required:[true, "setup is required"],
    },
    punchline: {
        type:String,
        required: [true, "punchline is required"],
    }
}, {timestamps: true})

const Jokes = mongoose.model("joke",JokesSchema);
module.exports = Jokes;