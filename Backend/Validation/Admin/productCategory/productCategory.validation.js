const joi = require("joi");

const schema = joi.object({

    id:joi.string().min(1).max(5).required(),
    name:joi.string().min(1.).max(100).required()

})

const validate = async(req,res,next)=>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({Error: value.error.details[0].message})
    }
    else{
        next()
    }
}

module.exports = {validate};