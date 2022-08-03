const express = require('express');


const Payment_routes = express.Router();

const{payment_get, payment_post, payment_patch, payment_delete }= require('../../../../Backend/Controller/Customer/MakePayment/MakePayment.controller');
const{validate} = require("../../../Validation/Customer/makePayment/makePayment.validation")


Payment_routes.get('/payment',payment_get);
Payment_routes.post('/payment',validate,payment_post);
Payment_routes.patch('/payment/:Transiction_id',validate,payment_patch);
Payment_routes.delete('/payment/:Transiction_id',payment_delete);


module.exports={Payment_routes};