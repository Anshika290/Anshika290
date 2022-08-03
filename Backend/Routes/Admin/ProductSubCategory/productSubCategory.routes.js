const express = require('express');


const subCategory_routes = express.Router();
const{product_sub_category_get,product_sub_category_post, product_sub_category_patch, product_sub_category_delete} = require("./../../../Controller/Admin/productSubCategory/productSubCategory.controller");
const{validate}=require('../../../Validation/Admin/productSubCategory/productSubCategory.validation');

subCategory_routes.get('/subproductcategory',product_sub_category_get);
subCategory_routes.post('/subproductcategory',validate,product_sub_category_post);
subCategory_routes.patch('/subproductcategory/:Sub_Category_id',validate,product_sub_category_patch);
subCategory_routes.delete('/subproductcategory/:Sub_Category_id',product_sub_category_delete);


module.exports={subCategory_routes};