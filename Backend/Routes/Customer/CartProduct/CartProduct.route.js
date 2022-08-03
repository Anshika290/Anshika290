const express = require('express');


const CartProduct_routes = express.Router();

const{CartProduct_get, CartProduct_post, CartProduct_patch, CartProduct_delete }= require('../../../../Backend/Controller/Customer/CartProduct/CartProduct.controller');
const{validate} = require("../../../Validation/Customer/CartProduct/CartProduct.validation")


CartProduct_routes.get('/cartproduct',CartProduct_get);
CartProduct_routes.post('/cartproduct',validate,CartProduct_post);
CartProduct_routes.patch('/cartproduct/:cart_id',validate,CartProduct_patch);
CartProduct_routes.delete('/cartproduct/:cart_id',CartProduct_delete);

module.exports={CartProduct_routes};