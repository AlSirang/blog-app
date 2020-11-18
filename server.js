
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const db = require("./db");

const app = express();
app.set("view engine", "ejs");

// port for server to listen
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// home router
const homeRouter = require("./API/home");
app.use("/", homeRouter);

// about router
const aboutRouter = require("./API/about");
app.use("/about", aboutRouter);

// contact router
const contactRouter = require("./API/contact");
app.use("/contact", contactRouter);

// compose router
const composeRouter = require("./API/compose");
app.use("/compose", composeRouter);

// blog posts router
const postRouter = require("./API/post");
app.use("/posts", postRouter);


// handel invalid routes
app.get('*', (req, res) => {
  res.render("not-found");
})



mongoose.connect("mongodb://localhost:27017/BlogsDB", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err) {
    console.log("Database Connected Successfully.");

    app.listen(PORT, function () {
      console.log(`Server is listening at http://localhost:${PORT}`);
    });
  } else {
    console.log("ERR Message: ", err);
  }
});


