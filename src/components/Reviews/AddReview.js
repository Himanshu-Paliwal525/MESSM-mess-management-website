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
                    cols={48}
                    placeholder="Share your experience.."
                    className="text-md resize-none py-1 px-1 border-x border-y shadow-md rounded-lg flex outline-none mx-1"
                />
                <button
                    type="submit"
                    className="text-md bg-[#ff3131] rounded-md text-white px-3 py-1"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddReview;
