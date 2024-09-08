import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import search from '../../Images/search.svg'
const Navbar = () => {
    const style = {
        color: "#ff3131",
        fontWeight: "bold",
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
    };
    const checkStyle = ({ isActive }) => (isActive ? style : {});
    const [searchBar,setSearchBar] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-ul items-center justify-between relative -right-16">
                <NavLink to="/about" className="nav-icon" style={checkStyle}>
                    <li>About</li>
                </NavLink>
                <NavLink to="/offers" className="nav-icon" style={checkStyle}>
                    <li>Offers</li>
                </NavLink>
                <NavLink to="/contact" className="nav-icon" style={checkStyle}>
                    <li>Contact Us</li>
                </NavLink>
                <li className="flex items-center px-[8px] cursor-auto">
                <input type="text" className={`${searchBar ? '':'hidden'} ml-16 outline-none px-2 rounded-sm h-[30px] border-b-2 border-black`} />
                <button type="button" onClick={()=>setSearchBar(true)}> <img src={search} alt="" className="h-[24px]"/>
                </button>
                </li>
            </div>
        </div>
    );
};

export default Navbar;
