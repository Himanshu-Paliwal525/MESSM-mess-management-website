import AllMessData from "../Mess Data/AllMessData";
import Mess from "../Mess/Mess";
import { Link } from "react-router-dom";
const AllMess = () => {
    const mess = AllMessData.map((mess) => {
        return (
            <div key={mess.id} className="m-2 flex">
                <Link to={`/mess/${mess.id}`}>
                    <Mess key={mess.id} props={mess} />
                </Link>
            </div>
        );
    });
    return <div className="grid grid-cols-1 mt-8 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">{mess}</div>;
};

export default AllMess;
