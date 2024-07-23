const Reviews = () => {
    return (<>
    <button className="my-4 px-2 py-1 rounded-lg bg-green-700 text-white">Click here to add Review</button>
        <div className="w-1/2 border-2 rounded border-gray-400 px-4 py-4">
            <div className="border-b border-b-gray-400">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-lg">Himanshu</h1>{" "}
                    <span className="text-gray-500 text-sm">2 years ago</span>
                </div>
                <div className="p-4 text-sm text-gray-700">
                    <div className=" font-bold text-green-700 text-xl rounded-full px-1">
                        ★★★★★
                        <span className="text-gray-400 font-semibold text-sm px-2">
                            (5/5)
                        </span>
                    </div>
                    <p className="mt-2">
                        This is the best mess I haven eaten food. Without a
                        doubt I ate for 2 years and didn't have to complain any,
                        not even once.
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-lg">Ravi</h1>
                    <span className="text-gray-500 text-sm">11 months ago</span>
                </div>
                <div className="p-4 text-sm text-gray-700">
                    <div className=" font-bold text-orange-500 text-xl rounded-full px-1">
                        ★★★
                        <span className="text-gray-400 font-semibold text-sm px-2">
                            (3/5)
                        </span>
                    </div>
                    <p className="mt-2">
                        I firstly liked it very much but after some 2-3 months,
                        the quality of food deteriorated, I complained but it
                        didn't improve to it's previous one. So yeah a mixed
                        response.
                    </p>
                </div>
            </div>
        </div>
            <button type="button"className="bg-green-700 px-2 py-1 mt-2 rounded-md text-white">Load More..</button>
    </>
    );
};

export default Reviews;
