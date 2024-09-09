const mongoose = require("mongoose");

const User = new mongoose.model("User", {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = { User };
