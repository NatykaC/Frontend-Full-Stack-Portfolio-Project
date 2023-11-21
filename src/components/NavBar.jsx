import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <div>
                <h1>✨ Divine Crystals ✨</h1>
                <div>
                    <button>
                        <Link to="/">⭐️ Home ⭐️</Link>
                    </button>
                <br/>
                </div>
                <button>
                    <Link to="/crystals">📋 My List 📋</Link>
                </button>
                <br/>
                <div>
                    <button>
                        <Link to="/crystals/new">🆕 Add a New Crystal to My List 🆕</Link>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default NavBar;