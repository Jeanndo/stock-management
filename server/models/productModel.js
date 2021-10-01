import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  productName:String,
  quantity:Number,
  from:String,
  owner:String,
  phone:Number,
  price:Number,
  name:String,
  email:String,
  createdAt:{
    type:Date,
    default:new Date()
  }
})

const PRODUCT = mongoose.model('PRODUCT',productSchema);

export default PRODUCT;