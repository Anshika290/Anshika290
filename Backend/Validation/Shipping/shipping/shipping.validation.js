const joi = require("joi");

const schema = joi.object({
    id : joi.string().min(1).max(10).required(),
    invoice_id : joi.string().min(1).max(100).required(),
    expected_delivery :joi.date().required(),
    ship_date : joi.date().required(),                                             
    customer_id :joi.string().min(1).max(10).required(),
    status : joi.string().min(1).max(50).required(),
    delivered_at :joi.date().required()

    
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