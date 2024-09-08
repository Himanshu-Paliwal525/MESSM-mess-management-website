import { formatDistanceToNow } from "date-fns";

const AllReviews = ({ reviews }) => {
    return (
        <div className="w-1/2 border rounded shadow-lg">
            {reviews.map((review, index) => {
                const reviewDate = new Date(review.timestamp);
                const timeAgo = formatDistanceToNow(reviewDate, {
                    addSuffix: true,
                });
                const exactDate = reviewDate.toLocaleDateString();
                let setStyle = {};
                if (review.rating === 1) setStyle = "text-[#FF0000]";
                if (review.rating === 2) setStyle = "text-[#FF4500]";
                if (review.rating === 3) setStyle = "text-[#FF8C00]";
                if (review.rating === 4) setStyle = "text-[#FFD700]";
                if (review.rating === 5) setStyle = "text-green-700";
                return (
                    <div
                        className="border-b px-6 py-4 border-b-gray-400 last:border-0"
                        key={index}
                    >
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-lg">
                                {review.name}
                            </h1>
                            <span className="text-gray-500 flex flex-col items-end gap-2 text-sm">
                                {timeAgo}
                                <span className="text-xs text-black font-medium">
                                    {exactDate}
                                </span>
                            </span>
                        </div>
                        <div className="p-4 text-sm text-gray-700">
                            <div
                                className={` font-bold ${setStyle} text-xl rounded-full px-1`}
                            >
                                {"★".repeat(review.rating)}
                                <span className="text-gray-400 font-semibold text-sm px-2">
                                    ({review.rating}/5)
                                </span>
                            </div>
                            <p className="mt-2">{review.review}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllReviews;
