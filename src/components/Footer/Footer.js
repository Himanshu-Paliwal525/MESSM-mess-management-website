import "./footer.css";
import whatsapp from "../../Images/whatsapp.png";
import instagram from "../../Images/instagram.png";
import pinterest from "../../Images/pinterest.png";
const Footer = () => {
    return (
        <div className="footer">
            <div>
                <span>MESS-M</span>
            </div>
            <ul className="footer-main">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
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
            <div>Copyright @ 2024 - All Rights are Reserved.</div>
        </div>
    );
};

export default Footer;
