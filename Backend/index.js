require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { searchByName } = require("./Controller/Search");
const { fetchMessData, fetchMessDetails } = require("./Controller/Mess");
const { signup, login } = require("./Controller/Login");
const { PostReview, CheckReview, GetReviews } = require("./Controller/Review");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

const mongoURI = process.env.MONGODB_URI;
mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.post("/login", login);
app.post("/signup", signup);
app.post("/addReview", PostReview);
app.post("/checkReview", CheckReview);
app.get("/reviews/:id", GetReviews);
app.get("/search", searchByName);
app.get("/all-mess", fetchMessData);
app.get("/mess/:id", fetchMessDetails);
app.listen(port, () => {
    console.log("app running on port 5000");
});
