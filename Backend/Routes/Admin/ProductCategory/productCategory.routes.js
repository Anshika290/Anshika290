const express = require('express');


const Category_routes = express.Router();

const{product_category_get, product_category_post,product_category_patch,product_category_delete}=require('./../../../Controller/Admin/productCategory/productCategory.controller');
const{validate} = require('../../../Validation/Admin/productCategory/productCategory.validation')

Category_routes.get('/productcategory',product_category_get);
Category_routes.post('/productcategory',validate,product_category_post);
Category_routes.patch('/productcategory/:Category_id',validate,product_category_patch);
Category_routes.delete('/productcategory/:Category_id',product_category_delete);


module.exports={Category_routes};