import { useContext, useState } from "react";
import AddReview from "./AddReview";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import AllReviews from "./AllReviews";
const Reviews = ({ reviews, setReviews }) => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const handleReviewButton = async () => {
        if (user === "") {
            alert("Sorry! You can't review unless u login");
            return;
        }
        const response = await fetch("http://localhost:5000/checkReview", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, user }),
        });
        if (response) {
            const data = await response.json();
            if (data.success) {
                alert("You have already reviewed!!");
            } else {
                setVisible(true);
            }
        } else {
            console.error("Can't fetch data properly.");
        }
    };

    return (
        <>
            <div className="flex justify-between w-1/3 items-center">
                <button
                    className="my-4 px-2 py-1 rounded-lg bg-green-700 text-white"
                    onClick={() => handleReviewButton()}
                >
                    Click here to add Review
                </button>
            </div>
            {visible ? (
                <AddReview setVisible={setVisible} setReviews={setReviews} />
            ) : (
                <></>
            )}
            <AllReviews reviews={reviews} />
            <button
                type="button"
                className="bg-green-700 px-2 py-1 mt-2 rounded-md text-white"
            >
                Load More..
            </button>
        </>
    );
};

export default Reviews;
