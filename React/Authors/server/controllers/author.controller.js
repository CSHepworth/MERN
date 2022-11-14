const Author = require('../models/author.model');

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.json({author: newAuthor}))
    .catch(err =>{
            console.log(req.body,"here")
            res.status(400).json(err)
        });
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};