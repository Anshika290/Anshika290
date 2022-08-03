const express = require('express');


const Cart_routes = express.Router();

const{Cart_get, Cart_post, Cart_patch, Cart_delete }= require('../../../../Backend/Controller/Customer/Cart/Cart.controller');
const{validate} = require("../../../Validation/Customer/Cart/cart.validation")


Cart_routes.get('/cart',Cart_get);
Cart_routes.post('/cart',validate,Cart_post);
Cart_routes.patch('/cart/:Cart_id',validate,Cart_patch);
Cart_routes.delete('/cart/:Cart_id',Cart_delete);

module.exports={Cart_routes};