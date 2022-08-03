const express = require('express');
const cors = require('cors');


const SR_routes = express.Router();

const{shopRegistration_get,shopRegistration_post,shopRegistration_patch,shopRegistration_delete} = require('./../../../Controller/Admin/ShopRegistration/shopRegistration.controller');
const{validate}=require('../../../Validation/Admin/shopRegistration/shopRegistration.validation');

SR_routes.get('/shopregistration',shopRegistration_get);
SR_routes.post('/shopregistration',validate,shopRegistration_post);
SR_routes.patch('/shopregistration/:Registration_No',validate, shopRegistration_patch);
SR_routes.delete('/shopregistration/:Registration_No',shopRegistration_delete);


module.exports={SR_routes };