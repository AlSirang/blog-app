const express = require("express");

const contactContent = "My contact is 404";

const contactRouter = express.Router();
contactRouter.get("/", (req, res) => {
  res.render("contact", { content: contactContent });
});

// export router
module.exports = contactRouter;
