const jokes = require("../models/jokes.model");


/* ----------------------------------------
    Export a function to get all jokes
-------------------------------------------*/
module.exports.findAllJokes = (req, res) => {
    jokes.find()
        .then(all => res.json({ jokes: all }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


/* ----------------------------------------
    Export a function to get a single joke
-------------------------------------------*/
module.exports.findOneJoke = (req, res) => {
    jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


/* --------------------------------------------
    Export a function to return a random joke
-----------------------------------------------*/
module.exports.findRandomJoke = (req, res) => {
    jokes.aggregate([{ $sample: { size: 1 } }])
        .then(oneRandomJoke => res.json({ joke: oneRandomJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

/* ----------------------------------------
    Export a function to create a joke
-------------------------------------------*/
module.exports.createNewJoke = (req, res) => {
    jokes.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


/* ----------------------------------------
    Export a function to update a joke
-------------------------------------------*/
module.exports.updateJoke = (req, res) => {
    jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedUser => res.json({ joke: updatedUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


/* ----------------------------------------
    Export a function to delete a joke
-------------------------------------------*/
module.exports.deleteJoke = (req, res) => {
    jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
