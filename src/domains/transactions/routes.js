const express = require("express");
const auth = require("./../../middleware/auth");
const router = express.Router();
const {
  getTransactionFromUser,
  newTransactionFromUser,
} = require("./controller");

//add

router.post("/", auth, async (req, res) => {
  const userId = req.currenUser.user;
  try {
    let {
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
      deduction,
    } = req.body;
    // console.log(req.body);
    //   conversationID = conversationID.trim();
    if (!userID) {
      return res.status(500).send("Empty credentials supplied!");
    } else if (userId !== userID) {
      return res.status(500).send("This is not Your ID");
    }

    if (
      !(
        userID &&
        amount &&
        totalPayment &&
        fee &&
        recepientName &&
        recepientPic &&
        date &&
        status &&
        transactionNumber &&
        paidWith &&
        paymentMethod &&
        sessionId &&
        recipientBank &&
        recipientAccountNumber &&
        completionTime &&
        deduction
      )
    ) {
      return res.status(500).send("Empty credentials supplied!");
    }

    let newTransaction = await newTransactionFromUser(
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
    );
    res.status(200).json(newTransaction);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/get", auth, async (req, res) => {
  const userId = req.currenUser.user;
  try {
    let { userTransactionId } = req.body;
    userTransactionId = userTransactionId.trim();
    if (!userTransactionId) {
      return res.status(500).send("Empty credentials supplied!");
    } else if (userId !== userTransactionId) {
      console.log(userId + " + " + userTransactionId);
      return res.status(500).send("This is not Your ID");
    }
    let transactions = await getTransactionFromUser(userTransactionId);
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
