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
  status:{
    type:[String],
    default:[]
  },
  createdAt:{
    type:Date,
    default:new Date()
  },

})

const PRODUCT = mongoose.model('PRODUCT',productSchema);

export default PRODUCT;