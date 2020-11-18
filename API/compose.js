const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const Blog = mongoose.model("Blog", require("../db"));

const composeRouter = express.Router();
// get route
composeRouter.get("/", (req, res) => {
  res.render("compose");
});

// post route
composeRouter.post("/", (req, res) => {
  const title = _.capitalize(req.body.postTitle),
    content = req.body.postBody;

  Blog.findOne({ title: title }, (err, foundBlog) => {
    if (!err) {
      if (!foundBlog) {
        const blog = new Blog({
          title,
          content,
        });

        blog.save((err) => {
          if (!err) {
            res.redirect("/");
          }
        });
      }

    } else {
      console.log(err);
    }

  });


});

// export router
module.exports = composeRouter;
