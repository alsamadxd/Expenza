import mongoose from "mongoose";
const TransSchema = new mongoose.Schema({
  name: String,
  desc: String,
  datetime: Date,
  price:Number,
});

export const Transaction = mongoose.model("Transaction", TransSchema);
