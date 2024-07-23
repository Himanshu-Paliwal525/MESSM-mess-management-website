import "./mess.css";
import veg from "../../Images/veg.png";
import nonVeg from "../../Images/non-veg.png";
import call from "../../Images/call.png";
import location from "../../Images/location.png";

const Mess = ({ props }) => {
    const { name, mob, nonveg, price, address } = props;
    return (
        <>
            <div className="rounded-lg w-72 h-64 mess">
                <div className="flex text-xl font-bold justify-between items-center mb-2">
                    {name}
                    <img
                        src={nonveg ? nonVeg : veg}
                        alt={nonveg ? "non-veg" : "veg"}
                        className="h-9"
                    />
                </div>
                Rs. {price}
                <p className="mess-p">
                    <img src={call} className="h-5" alt="" /> +91{" "}
                    {mob}
                </p>
                <p className="mess-p">
                    <img src={location} className="h-5" alt="" />
                    {address}
                </p>
            </div>
        </>
    );
};

export default Mess;
