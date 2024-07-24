import { useState } from "react";
import Star from "./starRating";
const AddReview = () => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <ul className="text-3xl">
                <Star index={index} setIndex={setIndex} />
            </ul>
            <form className="flex items-start my-4">
                <textarea
                    type="text"
                    rows={5}
                    cols={40}
                    placeholder="Share your experience.."
                    className="text-md resize-none py-1 px-1 border-2 border-gray-400 rounded-lg flex outline-pink-600 mx-1"
                />
                <button
                    type="submit"
                    className="text-md bg-pink-600 rounded-md text-white px-3 py-1"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddReview;
