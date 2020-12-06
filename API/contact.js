const express = require("express");

const contactContent = "Github";

const contactRouter = express.Router();
contactRouter.get("/", (req, res) => {
  res.render("contact", { content: contactContent });
});

// export router
module.exports = contactRouter;
