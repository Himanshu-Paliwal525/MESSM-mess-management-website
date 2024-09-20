import { useState, useContext } from "react";
import Star from "./starRating";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const AddReview = ({ setVisible, setReviews }) => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [reviewData, setReviewData] = useState({
        mess_id: Number(id),
        name: user,
        rating: 0,
        review: "",
    });

    const handleReviewChange = (e) => {
        setReviewData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleReview = async (e) => {
        e.preventDefault();
        if (reviewData.rating === 0) {
            alert("Please Provide rating!!");
            return;
        }
        if (reviewData.name === "") {
            alert("Please Login first to review!");
            return;
        }
        const response = await fetch("https://messm-mess-management-website.onrender.com/addReview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            alert("review successfully added!");
            try {
                const response = await fetch(
                    `https://messm-mess-management-website.onrender.com/reviews/${id}`
                );
                const data = await response.json();
                console.log(data);
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
            setVisible(false);
        } else {
            console.log("Error adding the review");
        }

        console.log(reviewData);
    };
    return (
        <div>
            <ul className="text-3xl">
                <Star index={reviewData.rating} setReviewData={setReviewData} />
            </ul>
            <form
                className="sm:flex sm:items-start my-4"
                onSubmit={handleReview}
            >
                <textarea
                    type="text"
                    rows={5}
                    placeholder="Share your experience.."
                    className="text-md resize-none py-1 px-1 border shadow-md rounded-lg flex outline-none sm:mx-1 w-full my-1 sm:w-[400px] text-sm sm:text-base"
                    name="review"
                    value={reviewData.review}
                    onChange={handleReviewChange}
                />
                <button
                    type="submit"
                    className="text-sm sm:text-base bg-[#ff3131] rounded-md text-white px-3 py-1"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddReview;
