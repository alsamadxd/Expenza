import mongoose from "mongoose";
const TransSchema = new mongoose.Schema({
  name: String,
  desc: String,
  datetime: Date,
});

export const Transaction = mongoose.model("Transaction", TransSchema);
