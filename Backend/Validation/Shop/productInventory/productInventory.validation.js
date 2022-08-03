const joi = require("joi");

const schema = joi.object({
    id : joi.string().min(1).max(5).required(),
    category_id : joi.string().min(1).max(5).required(),
    subcategory_id : joi.string().min(1).max(3).required(),
    name : joi.string().min(1).max(200).required(),
    company : joi.string().min(1).max(200).required(),                                          
    price : joi.number().min(9).max(999999999).required(),
    quantity : joi.number().min(9).max(99999999999).required(),
    shop_id :joi.string().min(1).max(5).required()


   
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