const joi = require("joi");

const schema = joi.object({
    Cart_id : joi.string().min(1).max(20).required(),
    Product_id :joi.string().min(1).max(20).required(),
    Mobile_No : joi.string().min(1).max(10).required(), 
    Customer_id:joi.string().min(1).max(20).required(), 
    Quantity   :joi.number().integer().min(1).max(99999).required(),     
    Added_on  :joi.number().integer().min(1).max(99999).required(),    
    payment_Status: joi.string().min(1).max(20).required(), 
    Price : joi.number().integer().min(1).max(999999999).required()   
    


})

const validate = async (req,res,next)=>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({Error:value.error.details[0].message})
    }else{
        next()
    }

    
}
module.exports = {validate}