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

  // const accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
  // const authToken = process.env.AUTH_TOKEN // Your Auth Token from www.twilio.com/console  

  // const client = new twilio(accountSid, authToken);

  // client.messages
  //   .create({
  //     body: `Dear ${owner} your product are now in our Stock you can visit our websie for payment`,
  //     to: `+25${phone}`, // Text this number
  //     from: '+16282579513', // From a valid Twilio number
  //   })
  //   .then((message) => console.log(message.sid));
  const resetURL = `http://localhost:3000/homepage/`
  const message = `Dear ${owner} your products arrieved at stock management system,you can vist our site or click the link below to make payment:${resetURL} if you don't have account you can sign up and remember to use this phone number${phone}otherwise you can't see your products THANK YOU for Storing with us`;
  try {
    await sendEmail({
      email:email,
      subject: "Your products arrieved at stockmanagement system",
      message,
    });
    //  res.status(200).json({
    //   status: "sucess",
    //   message: "email sent successfully",
    // });
  } catch (error) {
   res.status(500).json({
     message:' Some thing went very wrong try again later'
   })
    
  }

  const newProduct = new PRODUCT({...product,creator:req.userId,createdAt:new Date().toISOString()});

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
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Product with that id");

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

const message = `Dear @ ${req.body.email} Your Product are now Approved!!!`;

try {
 
  await sendEmail({
    email:req.body.email,
    subject: "Your products arrieved at stockmanagement system",
    message,
  });

  const email = req.body
  const newEmail = new Email(email);
  await newEmail.save();

  res.status(201).json(newEmail);
} catch (error) {
  console.log(error)
 res.status(500).json({
   message:error.message
 })
  
}
}
