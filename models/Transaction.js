import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  senderName: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
  receiverId: {
    type: String,
    required: true,
  },
  tranId: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: () => Date.now(),
  },
});

export default mongoose.models?.Transaction ||
  mongoose.model("Transaction", TransactionSchema);
