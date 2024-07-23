import "./Banner.css";

const Banner = ({ header, para, style ,bannerContent}) => {
    return (
        <div className="banner" style={style}>
            <div className="banner-content" style={bannerContent}>
                <div className="banner-head">{header}</div>
                <div className="banner-desc">{para}</div>
            </div>
        </div>
    );
};

export default Banner;
