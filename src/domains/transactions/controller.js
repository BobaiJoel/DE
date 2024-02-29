const Transaction = require("./model");
const User = require("../user/model");

// const newMessageFromAI = async (
//   conversationID,
//   sender,
//   text,
//   currentModel,
//   maxToken,
//   temPerature,
//   aiName
// ) => {
//   try {
//     if (aiName === "chatGPT") {
//       let message = await chatGPT(text, currentModel, maxToken, temPerature);
//       const newMessage = new AiMessage({
//         conversationID: conversationID,
//         sender: sender,
//         text: `${message}`,
//       });
//       const savedMessage = await newMessage.save();
//       return savedMessage;
//     } else {
//     }
//   } catch (err) {
//     throw err;
//   }
// };
const newTransactionFromUser = async (
  userID,
  amount,
  totalPayment,
  fee,
  recepientName,
  recepientPic,
  date,
  status,
  transactionNumber,
  paidWith,
  paymentMethod,
  sessionId,
  recipientBank,
  recipientAccountNumber,
  note,
  completionTime,
  deduction
) => {
  try {
    let _id = userID;
    // console.log(_id + " " + deduction);
    await User.updateOne({ _id }, { myBalance: deduction });
    const newTransaction = new Transaction({
      userID: userID,
      amount: amount,
      totalPayment: totalPayment,
      fee: fee,
      recepientName: recepientName,
      recepientPic: recepientPic,
      date: date,
      status: status,
      transactionNumber: transactionNumber,
      paidWith: paidWith,
      paymentMethod: paymentMethod,
      sessionId: sessionId,
      recipientBank: recipientBank,
      recipientAccountNumber: recipientAccountNumber,
      note: note,
      completionTime: completionTime,
    });
    const savedMessage = await newTransaction.save();
    return savedMessage;
  } catch (err) {
    throw err;
  }
};

const getTransactionFromUser = async (userTransactionId) => {
  try {
    const transactions = await Transaction.find({
      userID: userTransactionId,
    })
      //   .skip((2 - 1) * 100)
      .limit(100);
    if (!transactions[0]) {
      console.log("User with the provided ID do not exists");
      throw Error("User with the provided ID do not exists");
    }
    return transactions;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  // newMessageFromAI,
  newTransactionFromUser,
  getTransactionFromUser,
};
