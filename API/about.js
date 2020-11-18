const express = require("express");

const aboutContent = "I dont know anything about me. lol";

const aboutRouter = express.Router();
aboutRouter.get('/', (req, res)=>{
    res.render('about', {content : aboutContent});
})


// export router
module.exports = aboutRouter;