const express = require("express");

const aboutContent = "My name is Bashir Uddin. I am a software engineering student.";

const aboutRouter = express.Router();
aboutRouter.get('/', (req, res)=>{
    res.render('about', {content : aboutContent});
})


// export router
module.exports = aboutRouter;