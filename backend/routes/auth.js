const router = require("express").Router();
const {User} = require("../models/user");
const joi = require("joi");
const bcrypt = require("bcrypt");


router.post("/",async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).send({message: error[0].message});
        }
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(401).send({message:"Invalid Email or Password"});
        }
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if(!validPassword){
            return res.status(401).send({message:"Invalid"})
        }
        const token = user.generateAuthToken();
        res.status(200).send({
            data:token,
            user:{
                firstName:user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
            message:"Logged in successFully"})
    } catch (error) {
        
    }
})

const validate = (data) =>{
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        password:joi.string().required().label("Password")
    })
    return schema.validate(data); // Return the validation result
}


module.exports = router;