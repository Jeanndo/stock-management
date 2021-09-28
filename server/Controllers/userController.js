import USER from '../models/userModel.js'
import mongoose from 'mongoose'

export const getAllUsers = async(req,res)=>{  
    try {
        const users = await USER.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).josn({message:error.message})
    }
}

export const createUser = async(req,res)=>{
    const user = req.body;

    const newUser = new USER(user)

    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
      res.status(409).json({message:error.message})
    }
}

export const updateUser = async(req,res)=>{

    const {id:_id} = req.params;
    const user = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No User with that id');
   
    const updatedUser = await USER.findByIdAndUpdate(_id,user,{new:true});
    res.json(updatedUser)
   }
   
   export const deleteUser = async(req,res)=>{
       const {id:_id} = req.params;
       if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No User with that id');
       
       await USER.findByIdAndDelete(_id)
       res.json({message:"USER Removed Successfully!!👍"});
   }
