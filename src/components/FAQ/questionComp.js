import { useState } from "react";
import DownArrow from "./DownArrowSVG";

const Question = ({ question, answer }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="mx-3 text-sm sm:text-base my-2">
            <div className="flex list-none justify-end lg:w-5/12">
                <li className=" py-1 bg-lime-100 px-3 flex-1 rounded-r-none rounded-lg cursor-default">
                    {question}
                </li>
                <button
                    className="bg-[#ff3131] rounded-r-sm px-1"
                    onClick={() => setVisible((prev) => !prev)}
                >
                    <DownArrow
                        Dvalue={visible ? "M6 15l6 -6 6+6" : "M6 9l6 6 6-6"}
                    />
                </button>
            </div>
            <p className={`${visible ? 'max-h-screen opacity-100':'max-h-0 opacity-0 overflow-hidden'} ease-in-out transition-all duration-1000 text-sm text-gray-500 pl-6 w-5/12 pr-4 py-2`}>
                {answer}
            </p>
        </div>
    );
};

export default Question;
