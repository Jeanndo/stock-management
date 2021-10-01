import PRODUCT from "../models/productModel.js";
import mongoose from "mongoose";
import twilio from 'twilio'
import dotenv from 'dotenv'

dotenv.config();

export const getAllProducts = async (req, res) => {
  try {
    const products = await PRODUCT.find();
    console.log("Backend:Produdcts", products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const {phone,owner} =req.body;
  console.log("product",product)

  const accountSid = 'ACd73d710919b75c3958a7f0a31e11495f'; // Your Account SID from www.twilio.com/console
  const authToken = 'ef54bb5a3920f54e8e1c3d76d0e3fc5f' // Your Auth Token from www.twilio.com/console  

  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: `Dear ${owner} your product are now in our Stock you can visit our websie for payment`,
      to: `+25${phone}`, // Text this number
      from: '+16282579513', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));


  const newProduct = new PRODUCT({...product,creator:req.userId,createdAt:new Date().toISOString()});
  console.log("newProduct",newProduct)
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

  console.log("PaymentInfo",req.body)
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


