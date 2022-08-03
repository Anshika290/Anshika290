const joi = require("joi");

const schema = joi.object({
    id : joi.string().min(1).max(3).required(),
    product_id : joi.string().min(1).max(5).required(),
    mfd :joi.date().required(),
    size : joi.string().min(1).max(3).required(),
    color : joi.string().min(1).max(20).required(),
    expiry_date :joi.date().required(),
    description : joi.string().min(1).max(200).required(),                                           
    weight :joi.number().integer().min(9).max(99999999999).required(),
    dimensions : joi.string().min(1).max(100).required(),
    photo :joi.string().min(1).max(200).required()


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