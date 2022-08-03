const express = require('express');


const productSpecification_routes = express.Router();

const{productSpecification_get,productSpecification_post, productSpecification_patch, productSpecification_delete}= require('../../../../Backend/Controller/Shops/ProductSpecifications/ProductSpecification.controller');
const{validate} = require("../../../Validation/Shop/productSpecification/productSpecifications.validation")


productSpecification_routes.get('/productspecification',productSpecification_get);
productSpecification_routes.post('/productspecification',validate,productSpecification_post);
productSpecification_routes.patch('/productspecification/:Product_Specifications',validate,productSpecification_patch);
productSpecification_routes.delete('/productspecification/:Product_Specifications',productSpecification_delete);


module.exports={productSpecification_routes};