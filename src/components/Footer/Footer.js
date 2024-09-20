import "./footer.css";
import whatsapp from "../../Images/whatsapp.png";
import instagram from "../../Images/instagram.png";
import pinterest from "../../Images/pinterest.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <ul className=" gap-4 sm:gap-10 sm:flex ">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/allmesses">All Messes</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <ul className="flex list-none gap-20 justify-center my-5">
                <li>
                    <img className="icon-size" src={whatsapp} alt="whatsapp" />
                </li>
                <li>
                    <img className="icon-size" src={pinterest} alt="" />
                </li>
                <li>
                    <img className="icon-size" src={instagram} alt="" />
                </li>
            </ul>
            <hr />
            <div className="text-sm sm:text-base">
                Copyright @ 2024 - All Rights are Reserved.
            </div>
        </div>
    );
};

export default Footer;
