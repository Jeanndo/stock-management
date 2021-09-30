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
  const {phone} =req.body;
  console.log("phone:",phone)

  const accountSid = 'ACd73d710919b75c3958a7f0a31e11495f'; // Your Account SID from www.twilio.com/console
  const authToken = process.env.AUTH_TOKEN // Your Auth Token from www.twilio.com/console  

  // const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: 'Your produ arrieved at STOCK MANAGEMENT SYSTEM thank you to store with us!!',
      to: `+25${phone}`, // Text this number
      from: '+16282579513', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));


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

  await PRODUCT.findByIdAndDelete(_id);
  res.json({ message: "Product Removed Successfully!!👍" });
};
