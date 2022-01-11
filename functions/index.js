// // Create and Deploy Your First Cloud Functions
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// change your stripe secret key here with yours
const stripe = require("stripe")("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
// - API
// - APP Config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello wolrd"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amout: total,
    currency: "usd",
  });
  //Ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command

exports.api = functions.https.onRequest(app);
