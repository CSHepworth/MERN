const AuthorController = require('../controllers/author.controller');
module.exports = function(app) {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}