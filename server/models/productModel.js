import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  productName:String,
  quantity:Number,
  KgperUnity:Number,
  from:String,
  owner:String,
  phone:Number,
  price:Number,
  name:String,
  email:String,
  approvedProducts:{
    type:[],
    default:[]
  },
  createdAt:{
    type:Date,
    default:new Date().toLocaleString('en-US')
  }
})

const PRODUCT = mongoose.model('PRODUCT',productSchema);

export default PRODUCT;