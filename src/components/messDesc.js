import { useParams } from "react-router-dom";
import fastfood from "../Images/fastfood.jpg";
import Reviews from "./Reviews/Reviews";
import { useEffect, useRef, useState } from "react";
import Location from "./LocationOnMap";
import Question from "./FAQ/questionComp";
import QA from "./FAQ/Q&A";

const MessDesc = () => {
    const { id } = useParams();
    const [messInfo, setMessInfo] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const locationRef = useRef();
    const reviewsRef = useRef();

    // Fetch mess details
    useEffect(() => {
        const fetchMessData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://messm-mess-management-website.onrender.com/mess/${id}`
                );
                if (!response.ok) throw new Error("Failed to fetch mess details");
                const messDetails = await response.json();
                setMessInfo(messDetails);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMessData();
    }, [id]);

    // Fetch reviews
    useEffect(() => {
        const fetchReviews = async () => {
            setError(null); // Reset error state
            try {
                const response = await fetch(
                    `https://messm-mess-management-website.onrender.com/reviews/${id}`
                );
                if (!response.ok) throw new Error("Failed to fetch reviews");
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchReviews();
    }, [id]);

    const starStyle = messInfo
        ? {
              width: `${(messInfo.rating / 5) * 100}%`,
              whiteSpace: "nowrap",
              overflow: "hidden",
          }
        : {};

    const scrollToHead = (section) => {
        section.current.scrollIntoView({ behavior: "smooth" });
    };

    const FAQ = QA.map((ques, i) => {
        return <Question key={i} question={ques.question} answer={ques.answer} />;
    });

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

    return (
        messInfo && (
            <>
                {/* Mess Description and Details */}
                <div className="lg:flex justify-between">
                    <div className="w-full mt-5 px-2">
                        <img src={fastfood} alt={messInfo.name} />
                    </div>
                    <div className="w-full px-3 mt-4">
                        <div className="text-3xl sm:text-4xl font-bold flex justify-start py-4 sm:py-8">
                            {messInfo.name}
                        </div>
                        <div className="flex items-center">
                            <div className="mb-4 text-xl font-semibold px-2">
                                {messInfo.rating}
                            </div>
                            <div
                                className="before:font-poppins before:content-['☆☆☆☆☆']  inline-block before:text-gray-400 before:text-3xl before:font-normal sm:-my-8 cursor-pointer"
                                onClick={() => scrollToHead(reviewsRef)}
                            >
                                <div
                                    style={starStyle}
                                    className="before:font-poppins before:content-['★★★★★'] before:text-amber-500 relative before:text-3xl -top-7 overflow-hidden -my-2"
                                ></div>
                            </div>
                        </div>
                        <p className="mb-4 sm:my-4 text-gray-500 text-sm sm:text-base">
                            {/* Example description */}
                            We offer a variety of dishes that are good in taste and health.
                        </p>
                        <div className="my-5 md:flex gap-10">
                            <p className="text-base sm:text-lg font-bold text-black font-poppins">
                                Location -
                                <span className=" text-sm sm:text-base pl-2 text-[#ff3131]">
                                    {messInfo.address[0].toUpperCase() +
                                        messInfo.address.slice(1)}
                                </span>
                            </p>
                            <p className="text-base sm:text-lg font-bold text-black font-poppins">
                                Contact No. -
                                <span className="text-sm sm:text-base text-[#ff3131]">
                                    +91 {messInfo.mob}
                                </span>
                            </p>
                        </div>
                        <span
                            className="relative text-sm sm:text-base bottom-2 text-white bg-[#ff3131] hover:bg-white hover:text-[#ff3131] border-[#ff3131] border-2 rounded-lg px-2 py-1 font-semibold font-poppins cursor-pointer"
                            onClick={() => scrollToHead(locationRef)}
                        >
                            Show location on map
                        </span>
                        <p className="text-2xl sm:text-3xl font-extrabold my-3">
                            <span className="font-bold">₹</span> {messInfo.price}/-
                        </p>
                    </div>
                </div>

                {/* Reviews */}
                <div className="font-poppins px-6">
                    <h1
                        className="text-2xl sm:text-3xl font-bold my-3"
                        ref={reviewsRef}
                    >
                        Mess Reviews
                    </h1>
                    <p className="sm:px-4">
                        {" "}
                        <div className="before:content-['☆☆☆☆☆']  inline-block before:text-gray-400 before:text-4xl">
                            <div
                                style={starStyle}
                                className="before:content-['★★★★★'] before:text-amber-500 relative before:text-4xl -top-10 overflow-hidden"
                            ></div>
                        </div>
                        <h2 className="relative -top-9 font-semibold text-xl text-gray-800">
                            {messInfo.rating} rating out of 113 individuals <br />
                            <br />
                            40 Reviews and 73 ratings
                        </h2>
                        <Reviews reviews={reviews} setReviews={setReviews} />
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="font-poppins my-8 ml-6">
                    <h1 className="text-3xl my-4 font-bold">FAQ</h1>
                    {FAQ}
                </div>

                {/* Location */}
                <div ref={locationRef}>
                    <h1 className="text-2xl sm:text-3xl my-4 font-bold ml-6 font-poppins">
                        Here you can find it out!!
                    </h1>
                    <Location location={messInfo.location} />
                </div>
            </>
        )
    );
};

export default MessDesc;
