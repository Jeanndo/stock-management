import PRODUCT from "../models/productModel.js";
import mongoose from "mongoose";
import Email from '../models/Email.js'
import dotenv from 'dotenv';
import sendEmail from '../utils/email.js';

dotenv.config();

export const getAllProducts = async (req, res) => {
  try {
    const products = await PRODUCT.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const {email,phone,owner} =req.body;
  
  const resetURL = `http://localhost:3000/homepage/`
  const message = `Dear ${owner} your products arrieved at CUSTOM BONDED WAREHOUSE,you can vist our site or click the link below to make payment:${resetURL} if you don't have account you can sign up and remember to use this phone number${phone}otherwise you can't see your products THANK YOU for Storing with us`;
  try {
    await sendEmail({
      email:email,
      subject: "Your products arrieved at CUSTOM BONDED WAREHOUSE system",
      message,
    });
  } catch (error) {
   res.status(500).json({
     message:' Some thing went very wrong try again later'
   })
    
  }
  const initialPoint = req.body.quantity*req.body.KgperUnity*12
  const Proprice =(initialPoint*18)/100;
   console.log("Price",Proprice)
  const newProduct = new PRODUCT({...product,creator:req.userId,createdAt:new Date(),price:Proprice});

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;
  console.log(req.body)
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Product with that id on update");

  const updatedProduct = await PRODUCT.findByIdAndUpdate(_id, product, {
    new: true,
  });
  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Product with that id");

  await PRODUCT.findByIdAndRemove(_id);
  res.json({ message: "Product Removed Successfully!!👍" });
};


export const payment= async(req,res)=>{

  let { phone, amount ,fullname,email} = req.body;

   
    try {
        const payload = {
          tx_ref: "MC-158523s09v5050e8",         //This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
          order_id: "USS_URG_STOCK"+Date.now(), //Unique ref for the mobilemoney transaction to be provided by the merchant
          amount: `${amount}`,
          currency: "RWF",
          email:`${email}`,
          phone_number:`${phone}`,
          fullname:`${fullname}`
        };

        const response = await flw.MobileMoney.rwanda(payload);
        res.status(200).json({
          ...response,
        });
      
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: "Try again later",
      });
    }
  }

export const approveProduct = async(req,res)=>{

  const {id} = req.params;
  const {email,subject} = req.body  
  const value=req.body;
 
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Product with that id approving");
 const message = `Dear @ ${email} ${req.body.message}`;
 try {
  await sendEmail({
  email:email,
  subject: "Your products arrieved at custom bonded warehouse system system",
  message,
  });

  const product =  await PRODUCT.findById(id);
  product.approvedProducts.push(value)
  const approvedProduct = await PRODUCT.findByIdAndUpdate(id,product,{new:true})
  res.json(approvedProduct)
 } catch (error) {
  res.status(409).json({ message:error.message});
 }
}

export const checkStatus = async(req,res)=>{
  const {id} = req.params;

  console.log("paid",id)

 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Product with that id ");;
 try {
  const product =  await PRODUCT.findById(id);
  console.log("paid",product)
  product.status.push(id)
  const paidProduct = await PRODUCT.findByIdAndUpdate(id,product,{new:true})
  res.json(paidProduct)
 } catch (error) {
  res.status(409).json({ message:error.message});
 }
}