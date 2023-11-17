import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <div>
                <div>
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                <br/>
                </div>
                <button>
                    <Link to="/crystals">My Crystals List</Link>
                </button>
                <br/>
                <div>
                    <button>
                        <Link to="/crystals/new">Add a New Crystal to My Crystals List</Link>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default NavBar;