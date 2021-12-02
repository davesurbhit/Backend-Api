const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const MONGOURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9rlzc.mongodb.net/razorpay?retryWrites=true&w=majority`

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(MONGOURI, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = InitiateMongoServer;