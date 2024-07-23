import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    const style = {
        color: "#f95f6c",
        fontWeight: "bold",
    };
    const checkStyle = ({ isActive }) => (isActive ? style : {});
    return (
        <div className="navbar">
            <div className="navbar-ul">
                <NavLink to="/" className="nav-icon" style={checkStyle}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" className="nav-icon" style={checkStyle}>
                    <li>About</li>
                </NavLink>
                <NavLink to="/search" className="nav-icon" style={checkStyle}>
                    <li>Search</li>
                </NavLink>
                <NavLink to="/offers" className="nav-icon" style={checkStyle}>
                    <li>Offers</li>
                </NavLink>
                <NavLink to="/contact" className="nav-icon" style={checkStyle}>
                    <li>Contact Us</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
