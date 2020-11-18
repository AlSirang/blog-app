const express = require("express");
const mongoose = require("mongoose");


const homeRouter = express.Router();

const Blog = mongoose.model("Blog", require("../db"));

const homeStartingContent = "You and view and read all Posts Made By Users";

homeRouter.get("/", (req, res) => {

  Blog.find({}, (err, blogs) => {
    if (!err) {
      return res.render("home", {
        content: homeStartingContent,
        posts: blogs,
      });
    } else {
      console.log(err);
    }
  });

});

module.exports = homeRouter;
