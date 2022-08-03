const joi = require("joi");

const schema = joi.object({
    customer_id : joi.string().min(1).max(10).required(),
    rating : joi.string().min(1).max(100).required(),
    timestamp :joi.date().required(),                                            
    message : joi.string().min(1).max(500).required()
    


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