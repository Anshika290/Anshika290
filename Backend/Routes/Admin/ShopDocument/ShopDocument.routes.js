const express = require('express');


const SD_routes = express.Router();

const{shopDocument_get,shopDocument_post,shopDocument_patch,shopDocument_delete} = require('./../../../Controller/Admin/ShopDocument/ShopDocument.controller');
const{validate}=require('../../../Validation/Admin/ShopDocument/ShopDocument.validation');

SD_routes.get('/shopdocument',shopDocument_get);
SD_routes.post('/shopdocument',validate,shopDocument_post);
SD_routes.patch('/shopdocument/:shop_id',validate, shopDocument_patch);
SD_routes.delete('/shopdocument/:shop_id',shopDocument_delete);


module.exports={SD_routes };