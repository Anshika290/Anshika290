const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
const port = 4000;

const{SR_routes}=require('./Routes/Admin/ShopRegistration/shopRegistration.routes');
const{subCategory_routes}=require('./Routes/Admin/ProductSubCategory/productSubCategory.routes');
const{Category_routes}=require('../Backend/Routes/Admin/ProductCategory/productCategory.routes');
const{offer_routes}=require('./Routes/Admin/Offers/offer.routes')
const{SD_routes}=require('./Routes/Admin/ShopDocument/ShopDocument.routes')

app.use('/admin',SR_routes)
app.use('/admin',Category_routes)
app.use('/admin',subCategory_routes)
app.use('/admin',offer_routes)
app.use('/admin',SD_routes)


const{productInventory_routes}=require('../Backend/Routes/Shops/productInventory/productInventory.route')
const{productSpecification_routes}=require('../Backend/Routes/Shops/productSpecifications/productSpecifications.route')

app.use('/shops',productInventory_routes)
app.use('/shops',productSpecification_routes)


const{shipping_routes}=require('../Backend/Routes/Shipping/Shipping.route')

app.use('/shipping',shipping_routes)


const{Addtowishlist_routes}= require('../Backend/Routes/Customer/Addtowishlist/Addtowishlist.route')
const{Cart_routes}=require('../Backend/Routes/Customer/Cart/cart.route')
const{CustomerRegistration_routes}=require('../Backend/Routes/Customer/CustomerRegistration/CustomerRegistration.route')
const{Payment_routes}=require('../Backend/Routes/Customer/MakePayment/makePayment.route')
const{Review_routes}=require('../Backend/Routes/Customer/Review/Review.route')
const{CartProduct_routes}=require('../Backend/Routes/Customer/CartProduct/CartProduct.route')

app.use('/customer',Addtowishlist_routes)
app.use('/customer',Cart_routes)
app.use('/customer',CustomerRegistration_routes)
app.use('/customer',Payment_routes)
app.use('/customer',Review_routes)
app.use('/customer',CartProduct_routes)










app.listen(port, (err) => {
  if (err) {
    console.log("err");
  }
  console.log(`server started port http://localhost/${port}`);
});
