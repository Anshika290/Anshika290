const express = require('express');


const Addtowishlist_routes = express.Router();

const{AddToWishList_get, AddToWishList_post, AddToWishList_patch, AddToWishList_delete }= require('../../../../Backend/Controller/Customer/Addtowishlist/Addtowishlist.controller');
const{validate}= require('../../../Validation/Customer/Addtowishlist/Addtowishlist.validation')


Addtowishlist_routes.get('/wishlist',AddToWishList_get);
Addtowishlist_routes.post('/wishlist',validate, AddToWishList_post);
Addtowishlist_routes.patch('/wishlist/:Product_id',validate, AddToWishList_patch);
Addtowishlist_routes.delete('/wishlist/:Product_id',AddToWishList_delete);


module.exports={Addtowishlist_routes};