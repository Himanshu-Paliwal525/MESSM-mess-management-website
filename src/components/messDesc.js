import { useParams } from "react-router-dom";
import fastfood from "../Images/fastfood.jpg";
import AllMessData from "./Mess Data/AllMessData";
import Reviews from "./Reviews/Reviews";
import { useEffect, useRef, useState } from "react";
import Location from "./LocationOnMap";
import Question from "./FAQ/questionComp";
import QA from "./FAQ/Q&A";

const MessDesc = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const locationRef = useRef();
    const reviewsRef = useRef();
    const mess = AllMessData.filter(function (mess) {
        return mess.id === Number(id);
    })[0];

    const starStyle = {
        width: `${(mess.rating / 5) * 100}%`,
        whiteSpace: "nowrap",
        overflow: "hidden",
    };
    const scrollToHead = (section) => {
        section.current.scrollIntoView({ behavior: "smooth" });
    };
    const FAQ = QA.map((ques, i) => {
        return <Question question={ques.question} answer={ques.answer} />;
    });
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/reviews/${id}`
                );
                const data = await response.json();
                console.log(data);
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };
        fetchReviews();
    }, [id]);
    return (
        <>
            <div className="flex justify-between">
                <div className="w-full mt-5 px-2">
                    <img src={fastfood} alt="" />
                </div>
                <div className="w-full px-3 mt-4">
                    <div className="text-4xl font-bold flex justify-start py-8">
                        {mess.name}
                    </div>
                    <div className="flex items-center">
                        <div className="mb-4 text-xl font-semibold px-2">
                            {mess.rating}
                        </div>
                        <div
                            className="before:font-poppins before:content-['☆☆☆☆☆']  inline-block before:text-gray-400 before:text-3xl before:font-normal -my-8 cursor-pointer"
                            onClick={() => scrollToHead(reviewsRef)}
                        >
                            <div
                                style={starStyle}
                                className="before:font-poppins before:content-['★★★★★'] before:text-amber-500 relative before:text-3xl -top-7 overflow-hidden -my-2"
                            ></div>
                        </div>
                    </div>
                    <p className="my-4 text-gray-500">
                        We offer a variety of Dishes, that not only are good in
                        taste but also good in health. We also not only offer
                        free home delievery but also own a full hall where you
                        can come and eat as much as u want without any limit. We
                        also offer sweet twice a week and special tiffin twice
                        also.
                    </p>
                    <div className="my-5">
                        <p
                            className="text-xl font-bold text-black font-poppins cursor-pointer"
                            onClick={() => scrollToHead(locationRef)}
                        >
                            Location -
                            <span className=" text-normal pl-2 text-[#ff3131]">
                                {mess.address[0].toUpperCase() +
                                    mess.address.slice(1)}
                            </span>
                        </p>
                        <p className="text-xl font-bold text-black font-poppins">
                            Contact No. -
                            <span className="text-[#ff3131]">
                                +91 {mess.mob}
                            </span>
                        </p>
                    </div>
                    <p className="text-3xl font-extrabold my-3">
                        <span className="font-bold">₹</span> {mess.price}/-
                    </p>
                </div>
            </div>
            <div className="font-poppins my-6">
                <h1 className="text-3xl font-bold my-3 ml-6">Description</h1>
                <p className="px-5 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt tenetur suscipit quisquam, delectus consequuntur
                    officiis hic, doloribus tempora labore cupiditate fugiat
                    maxime incidunt dolores. Laborum inventore nobis minima
                    possimus, suscipit dolorum ipsam asperiores id ea commodi
                    aperiam, maiores nisi delectus, necessitatibus dicta.
                    Eveniet hic dolor officia dolorum? Laboriosam provident
                    temporibus mollitia voluptas repellat, dolores eligendi
                    aperiam adipisci fuga! Accusamus tempora molestias dicta
                    magnam aspernatur fuga blanditiis, in eveniet ducimus, sint
                    veniam natus inventore repudiandae! Similique ipsam
                    voluptates sit iste harum omnis minima neque repudiandae,
                    natus laboriosam porro perspiciatis.
                </p>
                <p className="px-5 text-justify">
                    ipsa ad non at perferendis in explicabo necessitatibus
                    dolore fugit provident culpa quibusdam atque vitae?
                    Inventore magnam vel enim, ipsam molestias saepe repudiandae
                    assumenda hic, eum architecto natus similique unde deserunt
                    optio corrupti, quaerat laboriosam harum. Labore deserunt
                    eveniet, aliquam voluptatum eos amet ipsa sequi similique at
                    veritatis aperiam, ipsam ratione est cumque a, et voluptatem
                    quisquam architecto ad? Cum eveniet vitae, enim temporibus
                    ut laudantium maxime distinctio, sapiente nemo aliquam id
                    corrupti ipsam esse consectetur nam quibusdam optio culpa
                    excepturi quisquam! Perferendis consequatur quisquam illum
                    iusto est nemo assumenda ipsam tenetur eius, dignissimos
                    distinctio saepe minima unde soluta consequuntur, omnis{" "}
                </p>
                <p className="px-5 text-justify">
                    eaque vero a quod sit tempora nesciunt delectus doloribus
                    optio. Sunt eaque, distinctio, minima velit possimus dolor
                    quibusdam, quod temporibus molestias excepturi modi commodi
                    fuga porro iste. Rem ratione ex cumque, inventore nesciunt,
                    blanditiis repellendus voluptas sit fugit suscipit facere
                    quod est. Aperiam, dolorem. Neque ipsum, ab distinctio
                    doloremque quibusdam sequi odio blanditiis, atque vitae quod
                    eveniet in hic, vel earum. Libero minima sed, nostrum, eius
                    nam vel deleniti dignissimos error possimus laudantium at
                    corrupti. Minus error veritatis dolor rerum expedita nihil
                    nisi voluptatum sint tenetur quos mollitia animi
                    consectetur, architecto pariatur aliquid atque voluptas
                    quisquam fugit nostrum. Eum aliquid, ullam eaque maiores
                    labore sint quae nostrum quia possimus recusandae vitae.
                </p>
                <h1 className="text-3xl font-bold my-3 ml-6">Menu</h1>
                <p className="text-justify px-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque modi nemo facilis sed veniam ullam soluta, quod
                    cumque, possimus officiis quisquam nihil. Minus voluptate
                    odio magnam. Blanditiis minus incidunt natus culpa
                    cupiditate?
                </p>
            </div>
            <div className="font-poppins px-6">
                <h1 className="text-3xl font-bold my-3" ref={reviewsRef}>
                    Mess Reviews
                </h1>
                <p className="px-4">
                    {" "}
                    <div className="before:content-['☆☆☆☆☆']  inline-block before:text-gray-400 before:text-4xl">
                        <div
                            style={starStyle}
                            className="before:content-['★★★★★'] before:text-amber-500 relative before:text-4xl -top-10 overflow-hidden"
                        ></div>
                    </div>
                    <h2 className="relative -top-9 font-semibold text-xl text-gray-800">
                        {mess.rating} rating out of 113 individuals <br />{" "}
                        <br />
                        40 Reviews and 73 ratings
                    </h2>
                    <Reviews reviews={reviews} setReviews={setReviews}/>
                </p>
            </div>
            <div className="font-poppins my-8 ml-6">
                <h1 className="text-3xl my-4 font-bold">FAQ</h1>
                {FAQ}
            </div>
            <div className="font-poppins my-8 flex flex-col items-center">
                <h1 className="text-3xl my-4 font-semibold">
                    Yet Not Satisfied ??
                </h1>
                <form className="w-1/2 flex justify-center">
                    <input
                        className="w-96 border-r-0 border outline-none border-gray-400 rounded-s-lg px-3"
                        type="text"
                        name="question"
                        placeholder="Have Questions ? Throw them here.."
                    />
                    <button
                        type="submit"
                        className="bg-[#ff3131] text-white rounded-e-md py-4 px-6"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div ref={locationRef}>
                <h1 className="text-3xl my-4 font-bold ml-6 font-poppins">
                    Here you can find it out !!
                </h1>
                <Location location={mess.location} />
            </div>
        </>
    );
};

export default MessDesc;
