const { Author } = require('../models/model');

/*-------------------------------------
            Create Author
---------------------------------------*/
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name,
    })
        .then(Author => response.json(Author))
        .catch(err => response.status(400).json(err));
}

/*-------------------------------------
            Get List of Authors
---------------------------------------*/
module.exports.getAllAuthor = (request, response) => {
    //Author.find({}).sort( { "name": 1 })
    Author.aggregate([
        {
            "$project": { 
                //field name with the value 0 to ignore , 1 to show
                "name": 1,
                "_id": 0,
                //new field to sort on it 
                "insensitive": { "$toLower": "$name" }
            }
        },
        { "$sort": { "insensitive": 1 } }
    ])
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



