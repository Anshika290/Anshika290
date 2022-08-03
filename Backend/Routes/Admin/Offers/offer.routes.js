const express = require('express');


const offer_routes = express.Router();

const{offers_get, offers_post, offers_patch, offers_delete}= require('../../../../Backend/Controller/Admin/offers/offer.controller');
const {validate} = require("../../../Validation/Admin/offers/offers.validation")

offer_routes.get('/offers',offers_get);
offer_routes.post('/offers', validate, offers_post);
offer_routes.patch('/offers/:Offer_Id',validate,offers_patch);
offer_routes.delete('/offers/:Offer_Id',offers_delete);


module.exports={offer_routes};