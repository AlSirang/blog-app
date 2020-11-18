const mongoose = require("mongoose");

module.exports = BlogSchema = mongoose.Schema({
        title: {
            type: String
        },
        content: {
            type: String
        }
    })


