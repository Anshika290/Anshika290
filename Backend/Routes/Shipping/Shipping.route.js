const express = require('express');


const shipping_routes = express.Router();

const{shipping_get,shipping_post, shipping_patch, shipping_delete}= require('../../../Backend/Controller/Shipping/Shipping/Shipping.controller');
const{validate} = require("../../../Backend/Validation/Shipping/shipping/shipping.validation")


shipping_routes.get('/shipping',shipping_get);
shipping_routes.post('/shipping',validate,shipping_post);
shipping_routes.patch('/shipping/:Shipping_id',validate,shipping_patch);
shipping_routes.delete('/shipping/:Shipping_id',shipping_delete);


module.exports={shipping_routes};