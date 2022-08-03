const express = require('express');


const Review_routes = express.Router();

const{Review_get, Review_post, Review_patch, Review_delete  }= require('../../../../Backend/Controller/Customer/Review/Review.controller');
const {validate} = require("../../../Validation/Customer/Review/review.validation")


Review_routes.get('/review',Review_get);
Review_routes.post('/review',validate,Review_post);
Review_routes.post('/review/:Cart_id',validate,Review_patch);
Review_routes.post('/review/:Cart_id',Review_delete);


module.exports={Review_routes};