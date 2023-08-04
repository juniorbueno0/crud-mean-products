// product routes
const express = require('express');
const routes = express.Router();

const prodController = require('../controllers/productController');

// api/products
routes.post('/', prodController.createProducts);
routes.get('/', prodController.getProducts);
routes.put('/:id', prodController.updateProducts);
routes.get('/:id', prodController.getProduct);
routes.delete('/:id', prodController.deleteProducts);

routes.post('/', ()=> {
    console.log('adding products');
})


module.exports = routes