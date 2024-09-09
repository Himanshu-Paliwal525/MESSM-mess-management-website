const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    mess_id: { type: Number, required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String },
    timestamp: { type: Date, default: Date.now() },
});

reviewSchema.index({ mess_id: 1, name: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
