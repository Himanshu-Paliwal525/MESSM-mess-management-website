import { useEffect, useState } from "react";
import Mess from "../Mess/Mess";
import { Link } from "react-router-dom";

const AllMess = ({ filter }) => {
    const [allMessData, setAllMessData] = useState([]);
    const [totalMessCount, setTotalMessCount] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        const fetchMessData = async () => {
            const messData = await fetch(
                `https://messm-mess-management-website.onrender.com/all-mess?page=${currPage}&filter=${filter}`
            );
            const fetchedData = await messData.json();

            setTotalMessCount(fetchedData.total.count);
            setAllMessData(fetchedData.hits);
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
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">{mess}</div>
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
