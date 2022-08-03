const joi = require("joi");

const schema = joi.object({
    product_id:joi.string().min(1).max(5).required(),
    customer_id:joi.string().min(1).max(10).required(),
    quantity:joi.number().integer().min(1).max(99999999999).required(),
    added_on:joi.date().required()

})

const validate = async (req,res,next)=>{
    const value = await schema.validate(req.body)
    if(value.err){
        res.send({Error:value.error.details[0].message})
    }else{
        next()
    }
}

module.exports = {validate}