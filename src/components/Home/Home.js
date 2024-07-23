import Banner from "../Banner/Banner";
import banner2 from "../../Images/Qualityfood.jpg";
import banner3 from "../../Images/fastfood.jpg";
import banner4 from "../../Images/Nonveg.jpg";
import { Link } from "react-router-dom";
const Home = () => {
    const banner2Style = {
        background: `url(${banner2}) no-repeat center center`,
        backgroundSize: "cover",
    };
    const banner3style = {
        background: `url(${banner3}) no-repeat center center`,
        backgroundSize: "cover",
    };
    const banner4style = {
        background: `url(${banner4}) no-repeat center center`,
        backgroundSize: "cover",
    };
    const banner2content = {
        background:
            "linear-gradient(rgba(255, 165, 0, 0.4),rgba(255, 165, 0, 1))",
        color: "white",
        textShadow: "0.1px 0.1px 10px black",
    };
    const banner3content = {
        background:
            "linear-gradient(rgba(17, 25, 119, 0.4),rgba(17, 25, 119, 1))",
        color: "white",
        textShadow: "0.1px 0.1px 10px black",
    };
    const banner4content = {
        background: "linear-gradient(rgba(255, 0, 0, 0.4),rgba(255, 0, 0, 1))",
        color: "white",
        textShadow: "0.1px 0.1px 10px black",
    };

    return (
        <>
            <Link to={"/mess"} style={{ textDecoration: "none"}} >
                <Banner
                    style={null}
                    bannerContent={null}
                    header={"BUDGET-FRIENDLY MEALS"}
                    para={
                        "Discover messes with unbeatable prices that won't break the bank. Click to find your affordable dining options today!"
                    }
                />
            </Link>
            <Link to={"/mess"} style={{ textDecoration: "none" }}>
                <Banner
                    style={banner2Style}
                    bannerContent={banner2content}
                    header={"PREMIUM QUALITY DINING"}
                    para={
                        "Indulge in messes that offer top-notch, delicious meals. Click here to explore the finest dining options available!"
                    }
                />
            </Link>
            <Link to={"/mess"} style={{ textDecoration: "none" }}>
                <Banner
                    style={banner3style}
                    bannerContent={banner3content}
                    header={"DELICIOUS FAST FOOD"}
                    para={
                        "Craving something quick and tasty? Check out messes serving mouthwatering fast food that hits the spot. Click to satisfy your cravings!"
                    }
                />
            </Link>
            <Link to={"/mess"} style={{ textDecoration: "none" }}>
                <Banner
                    style={banner4style}
                    bannerContent={banner4content}
                    header={"NON-VEG MESS OPTIONS"}
                    para={
                        "Looking for delicious non-veg meals? Discover messes that cater to your cravings with a variety of non-veg delights. Click to explore now!"
                    }
                />
            </Link>
        </>
    );
};

export default Home;
