const { Author } = require('../models/model');

/*-------------------------------------
            Create Author
---------------------------------------*/
module.exports.createAuthor = (request, response) => {
    const { name , birthDate} = request.body;
    Author.create({
        name,
        birthDate
    })
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

/*-------------------------------------
            Get List of Authors
---------------------------------------*/
module.exports.getAllAuthor = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

/*-------------------------------------
            Get Author By ID
---------------------------------------*/
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

/*-------------------------------------
            Update Author By ID
---------------------------------------*/
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err));
}

/*-------------------------------------
            Delete Author By ID
---------------------------------------*/
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



