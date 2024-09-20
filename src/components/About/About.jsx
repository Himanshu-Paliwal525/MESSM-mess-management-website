import messm from "../../Images/Mess-m.png";
const AboutPage = () => {
    return (
        <div className="px-2 sm:px-8 md:px-20 py-8 font-poppins">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 my-5">
                Welcome to MessM!
            </h2>
            <p className="text-justify">
                At MessM, we aim to make meal management for students and
                professionals simple, efficient, and transparent. Whether you
                are looking for the perfect mess that fits your taste, diet, or
                budget, or you're managing a mess and want to reach more people,
                we've got you covered.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 my-5">
                What We Offer
            </h2>
            <div className="md:flex justify-between items-center md:mr-10">
                <ul className="list-decimal list-inside mx-4 flex flex-col gap-2">
                    <li className="text-justify">
                        <strong>Search & Discover:</strong> Find the best messes
                        near your location based on ratings, reviews, and
                        preferences.
                    </li>
                    <li className="text-justify">
                        <strong>Convenient Listings:</strong> Get detailed
                        information about each mess, including menu options,
                        operating hours, and more.
                    </li>
                    <li className="text-justify">
                        <strong>User Reviews & Ratings:</strong> Make informed
                        choices with honest feedback from other users.
                    </li>
                    <li className="text-justify">
                        <strong>Manage with Ease:</strong> If you run a mess, we
                        provide tools to help you reach your target audience
                        effortlessly.
                    </li>
                </ul>
                <img src={messm} className="block mx-auto md:inline md:mx-0 h-20 md:h-36" alt="" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 my-4">
                Our Mission
            </h2>
            <p className="text-justify">
                We believe that good food is not just about taste—it's about
                accessibility, convenience, and value. Our mission is to connect
                people with messes that meet their needs, providing transparency
                and ease in an area often filled with uncertainty.
            </p>
        </div>
    );
};

export default AboutPage;
