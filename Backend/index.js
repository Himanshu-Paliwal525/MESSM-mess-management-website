require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { signup, login } = require("./View/Login");
const { PostReview, CheckReview, GetReviews } = require("./View/Review");
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

const mongoURI = process.env.MONGODB_URI;
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.post("/login", login);
app.post("/signup", signup);
app.post("/addReview", PostReview);
app.post("/checkReview", CheckReview);
app.get("/reviews/:id", GetReviews);
app.listen(port, () => {
    console.log("app running on port 5000");
});
