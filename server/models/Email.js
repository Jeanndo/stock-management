import mongoose from "mongoose";

const emailSchema = mongoose.Schema({
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Email = mongoose.model("Email", emailSchema);

export default Email;
