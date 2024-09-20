import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import search from "../../Images/search.svg";
import { UserContext } from "../../context/userContext";
const Navbar = () => {
    const style = {
        color: "#ff3131",
        fontWeight: "bold",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
    };
    const { setSearchedItems } = useContext(UserContext);
    const checkStyle = ({ isActive }) => (isActive ? style : {});
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = async () => {
        if (searchTerm.trim() !== "") {
            const response = await fetch(
                `https://messm-mess-management-website.onrender.com/search?messname=${searchTerm}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch search results.");
            }
            const results = await response.json();
            setSearchedItems(results);
            setSearchTerm("");
        }
    };
    return (
        <div className="navbar font-poppins">
            <div className="flex navbar-ul items-center lg:gap-4 lg:relative lg:-right-16">
                <NavLink
                    to="/about"
                    className="xl:w-[150px] lg:block xl:flex xl:text-xl lg:text-base xl:justify-center lg:text-[darkgreen] hidden xl:px-[8px] xl:py-[4px]"
                    style={checkStyle}
                >
                    <li>About</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    className="xl:w-[150px] lg:block xl:flex xl:text-xl xl:justify-center lg:text-[darkgreen] hidden xl:px-[8px] xl:py-[4px]"
                    style={checkStyle}
                >
                    <li>Contact Us</li>
                </NavLink>
                <li className="flex items-center sm:px-[8px] cursor-auto ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`lg:text-base w-[180px] sm:w-full xl:ml-16 outline-none px-2 h-[30px] border-b-2 border-black`}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                    <Link
                        to={searchTerm.trim() !== "" ? "/search" : null}
                        onClick={handleSearch}
                    >
                        <img src={search} alt="" className="h-[24px]" />
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default Navbar;
