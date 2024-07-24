const star = ({ setIndex, index }) => {
    const stars = ["☆", "☆", "☆", "☆", "☆"];
    const filled = "★";
    function handleClick(ind) {
        setIndex(ind + 1);
    }
   let setStyle = {};
if(index === 1) setStyle = {color: '#FF0000'};
if(index === 2) setStyle = {color: '#FF4500'}
if(index === 3) setStyle = {color: '#FF8C00'}
if(index === 4) setStyle = {color: '#FFD700'}
if(index === 5) setStyle = {color: '#FFFF00'}

    
    const star = stars.map((empty, i) => {
        return (
            <li onClick={() => handleClick(i)} style={index <= i ? {color: 'gray'}: setStyle}>
                {index <= i ? empty : filled}
            </li>
        );
    });

    return <div className="flex">{star}</div>;
};

export default star;
