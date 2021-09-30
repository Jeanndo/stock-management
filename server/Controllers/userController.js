import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import mongoose from 'mongoose';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "90d" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went Very Wrong" });
  }
};
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName,role,phone} = req.body;
  console.log(req.body)
  try {
    const existingUser = await User.findOne({ email });
    console.log("password",password)
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password not matching" });
    const hashedPassword = await bcrypt.hash(password, 12);
   
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName}`,
      lastName,
      role,
      phone
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "90d",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went Very Wrong" });
  }
};

export const getUsers = async (req,res)=>{
try {
  const allUsers = await User.find();
  console.log(allUsers);
  res.status(200).json(allUsers);
} catch (error) {
  console.log(error);
}
  
}

  export const deleteUser = async (req, res) => {
    const { id: _id } = req.params;
    console.log(req.params);
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("Not User With that id");
  
    await User.findByIdAndRemove(_id);
    // console.log("Deleted")
    res.json({ message: "User Removed Successfully!!👍" });
  };



  
// import USER from '../models/userModel.js'
// import mongoose from 'mongoose'

// export const getAllUsers = async(req,res)=>{  
//     try {
//         const users = await USER.find();
//         res.status(200).json(users)
//     } catch (error) {
//         res.status(404).josn({message:error.message})
//     }
// }

// export const createUser = async(req,res)=>{
//     const user = req.body;

//     const newUser = new USER(user)

//     try {
//         await newUser.save() // id:{type:String},
//         res.status(201).json(newUser)
//     } catch (error) {
//       res.status(409).json({message:error.message})
//     }
// }

// export const updateUser = async(req,res)=>{

//     const {id:_id} = req.params;
//     const user = req.body;
//     if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No User with that id');
   
//     const updatedUser = await USER.findByIdAndUpdate(_id,user,{new:true});
//     res.json(updatedUser)
//    }
   
//    export const deleteUser = async(req,res)=>{
//        const {id:_id} = req.params;
//        if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No User with that id');
       
//        await USER.findByIdAndDelete(_id)
//        res.json({message:"USER Removed Successfully!!👍"});
//    }
