import "./Banner.css";

const Banner = ({ header, para, style ,bannerContent}) => {
    return (
        <div className="banner lg:h-[400px]" style={style}>
            <div className="banner-content justify-around sm:justify-between" style={bannerContent}>
                <div className="font-bold text-3xl md:text-6xl lg:text-7xl">{header}</div>
                <div className="font-[500] md:text-2xl lg:text-3xl">{para}</div>
            </div>
        </div>
    );
};

export default Banner;
