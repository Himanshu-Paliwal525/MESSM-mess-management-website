const DownArrow = ({ Dvalue }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={Dvalue}
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default DownArrow;
