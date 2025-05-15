// const express = require("express");
import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import {Transaction} from "./models/Transaction.js"
const app = express();

let a=await mongoose.connect("mongodb://localhost:27017/transaction");
app.use(cors())
app.use(express.json())
const port = 3000;

app.get("/api/test", (req, res) => {
  const transaction = new Transaction()
  transaction.save();
  res.json("Hello Worldsdfg!");
});

app.post("/api/transaction", (req, res)=>{
  const{name,desc,datetime,price}=req.body;
  const transaction = new Transaction({name,desc,datetime,price})
  res.json(req.body)
  transaction.save();
})

app.get("/api/transactions", async (req,res)=>{
  const transactions= await Transaction.find();
  res.json(transactions)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 