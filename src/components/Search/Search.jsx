import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const Search = () => {
    const { searchedItems } = useContext(UserContext);
    return (
        <div className="mx-20">
            <h1 className=" my-8 text-2xl font-bold">
                {" "}
                Here are All the Search Results
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                {searchedItems.map((mess, index) => {
                    const id = mess._id;
                    mess = mess._source;
                    console.log(id);
                    return (
                        <Link to={`/mess/${id}`} key={index}>
                            <div className="p-4 border-black border-dashed rounded-xl border-2 m-2">
                                <h2>{mess.name}</h2>
                                <p>Rating: {mess.rating}</p>
                                <p>Price: {mess.price}</p>
                                <p>Type: {mess.nonveg ? "nonveg" : "veg"}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
