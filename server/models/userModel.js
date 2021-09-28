import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
 firstName:String,
 lastName:String,
 phone:Number,
 Role:{
     type:String,
     default:'client'
 },
createdAt:{
type:Date,
default:new Date()
}
})

const USER = mongoose.model('USER',userSchema);

export default USER;