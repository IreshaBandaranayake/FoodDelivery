import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// login User
const loginUser = async (req,res) => {

}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register User
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // checking whether the user is already exists
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User Already Exists"})
        }
        //validating email format and Strong Password
        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"Please Enter a Valid Email"})
        }

        if(password.length<8) {
            return res.json({success:false,message:"Please Enter a Strong Password"})
        }

        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user)
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}