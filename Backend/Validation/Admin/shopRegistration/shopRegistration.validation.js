const joi = require("joi");

const schema = joi.object({
    registration_no:joi.string().min(1).max(50).required(),
    id:joi.string().min(1).max(5).required(), 
    name:joi.string().min(1).max(100).required(),
    address:joi.string().min(1).max(100).required(),
    city :joi.string().min(1).max(100).required(),
    state :joi.string().min(1).max(100).required(),
    pin :joi.string().min(6).max(6).required(),
    contact :joi.string().min(10).max(10).required(),
    email :joi.string().min(1).max(150).required(),
    owner :joi.string().min(1).max(100).required(),
    url :joi.string().min(1).max(200).required(),
    gst_no :joi.string().min(1).max(100).required(),
    type :joi.string().min(1).max(100).required(),
    turnover :joi.number().integer().min(9).max(999999999).required(),
    description :joi.string().min(1).max(250).required(),
    password :joi.string().min(1).max(50).required(),
    aadhar_no :joi.string().min(12).max(12).required(),
    status :joi.string().min(1).max(20).required() 

})

const validate = async(req,res,next)=>{
const value = await schema.validate(req.body)
if(value.error){
    res.send({Error:value.error.details[0].message})
}else{
    next()
}
}

module.exports ={validate}