const express = require("express");
const mongoose = require("mongoose");

const Blog = mongoose.model("Blog", require("../db"));

const postRouter = express.Router();

postRouter.get("/:postId", (req, res) => {
  const requestedPost = req.params.postId;

  Blog.findOne({ _id: requestedPost }, (err, foundPost) => {
    if (!err) {
      console.log(Boolean(foundPost));
      if (foundPost) {
        return res.render("post", { blog: foundPost });
      }
      else {
        // if no blogs found
        res.render("not-found");
      }
    } 
  });

});

module.exports = postRouter;
