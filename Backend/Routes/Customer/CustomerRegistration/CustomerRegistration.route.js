const express = require('express');


const CustomerRegistration_routes = express.Router();

const{customerRegistration_get, customerRegistration_post, customerRegistration_patch, customerRegistration_delete }= require('../../../../Backend/Controller/Customer/CustomerRegistration/CustomerRegistration.controller');
const {validate} = require("../../../Validation/Customer/customerRegistration/customerRegistration.validation")



CustomerRegistration_routes.get('/registration',customerRegistration_get);
CustomerRegistration_routes.post('/registration',validate,customerRegistration_post);
CustomerRegistration_routes.patch('/registration/:mobile_no',validate,customerRegistration_patch);
CustomerRegistration_routes.delete('/registration/:mobile_no',customerRegistration_delete);


module.exports={CustomerRegistration_routes};