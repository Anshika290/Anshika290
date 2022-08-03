const joi = require("joi");

const schema = joi.object({

    shop_id:joi.string().min(1).max(5).required(),
    registration_card:joi.string().min(1).max(200).required(),
    aadhar:joi.string().min(1).max(200).required(),
    photo:joi.string().min(1).max(200).required(),
    pan:joi.string().min(1).max(200).required()

})

const validate = async(req,res,next)=>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({Error: value.error.details[0].message})
    }else{
        next()
    }
}

module.exports = {validate}


