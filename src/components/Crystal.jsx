import { Link } from "react-router-dom";

function Crystal({crystal}) {
    return (
        <div>
           <div>
            <Link to={`/crystals/${crystal.id}`}>{crystal.name}</Link>
           </div>
        </div>
    )
};

export default Crystal;