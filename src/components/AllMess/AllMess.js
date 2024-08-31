import AllMessData from "../Mess Data/AllMessData";
import Mess from "../Mess/Mess";
import { Link } from "react-router-dom";
const AllMess = ({filter}) => {
    const mess = AllMessData.map((mess) => {
        return (
            <div key={mess.id} className="m-2 flex justify-center">
                <Link
                    to={`/mess/${mess.id}`}
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    className="border-2 hover:bg-slate-100 rounded"
                >
                    <Mess key={mess.id} props={mess} />
                </Link>
            </div>
        );
    });
    return (
        <div className="">
            <div>{filter}</div>
            <div className="grid grid-cols-4">{mess}</div>;
        </div>
    );
};

export default AllMess;
