const express = require("express");
const router = express.Router();

const userRoutes = require("./../domains/user");
const OTPRoutes = require("./../domains/otp");
const UploadRoutes = require("./../domains/uploads");
const userTransactionRoutes = require("./../domains/transactions");
// const ConversationRoutes = require("./../domains/conversation");
// const AiConversationRoutes = require("./../domains/ai_conversation");
const EmailVerificationRoutes = require("./../domains/email_verification");
// const MessageRoutes = require("./../domains/message");
// const AiMessageRoutes = require("./../domains/ai_message");

router.use("/user", userRoutes);
router.use("/otp", OTPRoutes);
router.use("/upload", UploadRoutes);
router.use("/transaction", userTransactionRoutes);
router.use("/email_verification", EmailVerificationRoutes);
// router.use("/conversation", ConversationRoutes);
// router.use("/ai_conversation", AiConversationRoutes);
// router.use("/message", MessageRoutes);
// router.use("/ai_message", AiMessageRoutes);

module.exports = router;
