const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserTransaction = new Schema(
  {
    userID: String,
    amount: Number,
    totalPayment: Number,
    fee: Number,
    recepientName: String,
    recepientPic: String,
    date: String,
    status: String,
    transactionNumber: Number,
    paidWith: String,
    paymentMethod: String,
    sessionId: Number,
    recipientBank: String,
    recipientAccountNumber: Number,
    note: String,
    comment: String,
    completionTime: String,
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", UserTransaction);

module.exports = Transaction;
