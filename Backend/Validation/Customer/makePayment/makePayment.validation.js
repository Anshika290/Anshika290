const joi = require("joi");

const schema = joi.object({
    cart_id : joi.string().min(1).max(10).required(),
    transaction_id : joi.string().min(1).max(50).required(),
    timestamp :joi.date().required(),
    tax : joi.number().integer().min(9).max(99999999999).required(),                                             
    amount :joi.number().integer().min(9).max(99999999999).required(),
    payment_mode : joi.string().min(1).max(50).required(),
    status :joi.string().min(1).max(20).required(),
    invoice_id:joi.string().min(1).max(100).required()



})



const validate = async (req, res, next)=>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({Error: value.error.details[0].message})
    }else{
        next()
    }
}
module.exports = {validate}