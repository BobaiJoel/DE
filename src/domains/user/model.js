const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  profilePicture: String,
  accountType: String,
  token: String,
  myBalance: Number,
  myIncome: Number,
  mySavings: Number,
  myExpense: Number,
  mySavingsUp: Number,
  myIncomeUp: Number,
  status: String,
  verified: { type: Boolean, default: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
