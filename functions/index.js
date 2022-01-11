const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// change your stripe secret key here with yours
const stripe = require("stripe")("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
