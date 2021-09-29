import PRODUCT from "../models/productModel.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
  try {
    const products = await PRODUCT.find();
    console.log("Backend:Produdcts",products )
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  
  const newProduct = new PRODUCT(product);
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
