import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import _ from "lodash";
import sendEmail from "../utils/email.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    console.log("user", password, existingUser.password);

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    console.log("is correct", isPasswordCorrect);
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
  res.json({ message: "User Removed Successfully!!👍" });
};

export const forgotPassword = async (req, res) => {
  //1) Get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "There is no user with that email address" });
  }
  //2) Generate random reset token
  const resetToken = jwt.sign({ id: user._id }, "test", { expiresIn: "20m" });
  await user.updateOne({ passwordResetToken: resetToken });
  //3)Send it to user's email
  const resetURL = `http://localhost:3000/reset-password/${resetToken}`;

  const message = `Forgot your password! please submit a PATCH request with your new password and confirmPassword to:${resetURL}.\n If you didn't forget your password please ignore this email.`;

  //3) send email
  try {
    await sendEmail({
      email: user.email,
      subject: "Your password Reset Token (valid for 20 min )",
      message,
    });
    res.status(200).json({
      status: "sucess",
      message: "Token sent to email",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    //  user.passwordResetTokenEpires = undefined
    await user.save({ validateBeforeSave: false });
    return res.status(500).json({ message: error });
  }
};

export const resetPassword = async (req, res) => {
  //1) Get user based on token
  const { passwordResetToken } = req.body;

  console.log("body", req.body);

  const user = await User.findOne({ passwordResetToken: passwordResetToken });
  console.log("user", user);
  //2) if the token has not expired , and there is a user , set new password

  if (!user) {
    return res.status(400).json({ message: "Token is invalid or has expired" });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  user.password = hashedPassword;
  console.log("newPass", user.password);
  user.passwordResetToken = undefined;
  await user.save();

  //3) update changePasswordAt propert for the user

  //4) log the user in , send JWT

  const token = jwt.sign({ email: user.email, id: user._id }, "test", {
    expiresIn: "90d",
  });
  res.status(200).json({
    message: "Password reseted successfully",
    token,
  });
};
