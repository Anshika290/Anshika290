const express = require('express');


const productInventory_routes = express.Router();

const{productInventery_get,productInventery_post, productInventery_patch, productInventery_delete}= require('../../../../Backend/Controller/Shops/ProductInventory/ProductInventory.controller');
const{validate} = require("../../../Validation/Shop/productInventory/productInventory.validation")


productInventory_routes.get('/productInventory',productInventery_get);
productInventory_routes.post('/productInventory',validate,productInventery_post);
productInventory_routes.patch('/productInventory/:Product_id',validate,productInventery_patch);
productInventory_routes.delete('/productInventory/:Product_id',productInventery_delete);


module.exports={productInventory_routes};