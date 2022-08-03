const joi = require("joi");

const schema = joi.object({
    id : joi.string().min(1).max(3).required(),
    coupon_code : joi.string().min(1).max(10).required(),
    from_date :joi.date().required(),
    to_date : joi.date().required(),                                             
    discount_percentage :joi.number().integer().min(9).max(99).required(),
    flat_discount :joi.number().integer().min(9).max(99999999999).required(),
    valid_in : joi.string().min(1).max(100).required(),
    bank_offer :joi.string().min(1).max(100).required()
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