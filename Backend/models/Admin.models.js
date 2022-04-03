const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, minlength: 3 },
    password: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 5 },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
