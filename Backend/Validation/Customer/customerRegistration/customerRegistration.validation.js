const joi = require("joi");

const schema = joi.object({
    id :  joi.string().min(1).max(10).required(),
    name : joi.string().min(1).max(100).required(),
    email : joi.string().min(1).max(150).required(),
    mobile : joi.string().min(10).max(10).required(),
    Password : joi.string().min(1).max(20).required(),                                           
    gender : joi.string().min(1).max(10).required(),  
    address : joi.string().min(1).max(100).required(),  
    city : joi.string().min(1).max(100).required(),  
    state : joi.string().min(1).max(100).required(),
    pin :joi.string().min(6).max(6).required()


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