//jshint esversion:6
//require("dotenv").config();
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');
// const bcrypt = require("bcrypt"); //video 410
// const session = require('express-session');//video 412
// const passport = require('passport');//video 412
// const passportLocalMongoose = require('passport-local-mongoose');//video 412
// const GoogleStrategy = require('passport-google-oauth20').Strategy;//Video 413
// const findOrCreate = require('mongoose-findOrCreate');
// const FacebookStrategy = require('passport-facebook');

const PORT = process.env.PORT || 5000;

app.get("/", function(req,res){
    res.send("API Running...");
  });
  

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
  });
  