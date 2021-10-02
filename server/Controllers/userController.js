import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import _ from "lodash";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "90d" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went Very Wrong" });
  }
};
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, role, phone } =
    req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password not matching" });
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName}`,
      lastName,
      role,
      phone,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "90d",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went Very Wrong" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Not User With that id");

  await User.findByIdAndRemove(_id);
  console.log("Deleted");
  res.json({ message: "User Removed Successfully!!👍" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "User with this eamil doesn't exist" });
  } else {
    const token = jwt.sign({ id: existingUser._id }, "reset", {
      expiresIn: "20m",
    });
    const data = {
      from: "stockman@gmail.com",
      to: email,
      subject: "Account Reseting Link",
      html: `
      <h2>Please click the given link to reset your password<h2/>
      <p>http://localhost:3000/reset-password/${token}<p/>
      `,
    };
    return User.updateOne({ resetLink: token }, (error, success) => {
      if (error) {
        return res.status(400).json({ message: "reset password link error" });
      } else {
        mg.message().send(data, (error, body) => {
          if (error) {
            return res.json({
              error: error.message,
            });
          }
          return res.json({
            Message: "email has been sent kindly reset your password",
          });
        });
      }
    });
  }
};

export const resetPassword = async (req, res) => {

  const { resetLink, newPass } = req.body;
  if (resetLink) {
    jwt.verify(resetLink, "reset", async(error, decodedData) => {
      if (error) {
        return res.status(401).json({
          error: "Invalid Token or expired",
        });
      }
      const user = await User.findOne({ resetLink });
      if (!user) {
        return res.status(400).json({
          error: "User with this token does not exist",
        });
      }
      const obj = {
        password: newPass,
        resetLink:''
      };
      user = _.extend(user, obj);

      try {
        await User.save();
        res.status(200).json({
          message: "your password has been changed",
        });
      } catch (error) {
        res.status(400).json({
          error: "Reset passwor error",
        });
      }
    });
  } else {
    res.status(401).json({ error: "Authentication error" });
  }
};
