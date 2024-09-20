const { Review } = require("../Model/ReviewSchema");
const PostReview = async (req, res) => {
    const { name, rating, review, mess_id } = req.body;
    const newReview = new Review({ name, rating, review, mess_id });
    await newReview.save();
    res.json({ success: true, message: "review added successfully" });
};
const CheckReview = async (req, res) => {
    const { id, user } = req.body;
    const review = await Review.findOne({ mess_id: id, name: user });
    if (review) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
};
const GetReviews = async (req, res) => {
    const { id } = req.params;
    const AllReviews = await Review.find({ mess_id: id });
    if (AllReviews) {
        res.json(AllReviews);
    } else {
        console.log("Error fetching All the reviews.");
    }
};
module.exports = { PostReview, CheckReview, GetReviews };
