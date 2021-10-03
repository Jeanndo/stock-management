import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    role:{
        type:String,required:true,
        default:'client'
    },
    phone:{type:Number},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    id:{type:String},
    createdAt:{
        type:Date,
        default:new Date().toDateString()
    },
    passwordResetToken:String
})

const USER = mongoose.model('USER',userSchema);

export default USER;