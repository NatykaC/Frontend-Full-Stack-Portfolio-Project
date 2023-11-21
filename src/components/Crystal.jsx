import { Link } from "react-router-dom";

function Crystal({crystal}) {
    return (
        <div>
           <div>
            <h4>
                <Link to={`/crystals/${crystal.id}`}>✨ {crystal.name} ✨</Link>
            </h4>
           </div>
        </div>
    )
};

export default Crystal;