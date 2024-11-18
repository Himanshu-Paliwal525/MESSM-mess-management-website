import { useEffect, useState } from "react";
import Mess from "../Mess/Mess";
import { Link } from "react-router-dom";

const AllMess = ({ filter }) => {
    const [allMessData, setAllMessData] = useState([]);
    const [totalMessCount, setTotalMessCount] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchMessData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://messm-mess-management-website.onrender.com/all-mess?page=${currPage}&filter=${filter}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const fetchedData = await response.json();
                setTotalMessCount(fetchedData.total.count);
                setAllMessData(fetchedData.hits);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false); // Stop loading
            }
        };
        fetchMessData();
    }, [currPage, filter]);

    const mess = allMessData.map((mess) => {
        const id = mess._id;
        mess = mess._source;
        return (
            <div key={id} className="m-2 flex justify-center">
                <Link
                    to={`/mess/${id}`}
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    className="border-2 hover:bg-slate-100 rounded"
                >
                    <Mess key={id} props={mess} />
                </Link>
            </div>
        );
    });

    return (
        <div className="">
            <div className="text-3xl my-4 ml-4 font-bold text-gray-700">
                {filter}
            </div>
            {isLoading && <p className="text-center text-gray-500">Loading mess data...</p>}
            {error && <p className="text-justify text-red-500 w-1/2 mx-20 text-lg">Due to insufficient funds, the backend service for this website is currently unavailable.
                However, you can view detailed screenshots and features of this project on my portfolio by
                clicking the button below. <br />
                <a href="https://himanshu-paliwal-portfolio.vercel.app/" target="blank" className="font-bold cursor-pointer hover:underline text-red-700 text-center">Click Here</a></p>}
            {!isLoading && !error && (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">{mess}</div>
            )}
            <div className="flex justify-center gap-20 my-16">
                {currPage > 1 && (
                    <button
                        className="bg-[#ff3131] text-white px-4 py-1 shadow-sm rounded-lg hover:shadow-black hover:shadow-md shadow-black font-poppins"
                        onClick={() => {
                            setCurrPage((prev) => prev - 1);
                            window.scrollTo(0, 0);
                        }}
                    >
                        prev
                    </button>
                )}

                {currPage * 15 < totalMessCount && (
                    <button
                        className="bg-[#ff3131] text-white px-4 py-1 shadow-sm rounded-lg hover:shadow-black hover:shadow-md shadow-black font-poppins"
                        onClick={() => {
                            setCurrPage((prev) => prev + 1);
                            window.scrollTo(0, 0);
                        }}
                    >
                        next
                    </button>
                )}
            </div>
        </div>
    );
};

export default AllMess;
