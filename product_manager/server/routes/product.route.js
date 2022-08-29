const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);




}

