import { useNavigate, Link } from "react-router-dom";
import {useState} from "react";

const API = import.meta.env.VITE_API_URL

function CrystalNewForm() {
    const navigate = useNavigate();
    const [crystal, setCrystal] = useState({
        name: "",
        color: "",
        hardness: "",
        rarity: "",
        can_be_water_cleansed: false,
        healing_effects: "",
        collected_on: "",
        favorite: false
    });

    const addNewCrystal = ()=>{
        const newCrystalData = {
            name: crystal.name,
            color: crystal.color,
            hardness: crystal.hardness,
            rarity: crystal.rarity,
            can_be_water_cleansed: crystal.can_be_water_cleansed,
            healing_effects: crystal.healing_effects,
            collected_on: crystal.collected_on,
            favorite: crystal.favorite
        }
        try {
            fetch(`${API}/crystals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCrystalData)
            })
            .then(res=>res.json())
            .then(()=>navigate(`/crystals`))
        } catch (error) {
            return error
        }
    };

    const handleNewFormTextChange = (e)=>{
        setCrystal({ ...crystal, [e.target.id]: e.target.value})
    };

    const handleWaterCleansedCheckboxChange = ()=>{
        setCrystal({ ...crystal, can_be_water_cleansed: !crystal.can_be_water_cleansed})
    };

    const handleFavoriteCheckboxChange = ()=>{
        setCrystal({ ...crystal, favorite: !crystal.favorite})
    };

    const handleNewFormSubmit = (e)=>{
        e.preventDefault()
        addNewCrystal()
    };

    return (
        <div>
            <h1>🆕 Add a New Crystal 🆕</h1>
            <br/>
            <form onSubmit={handleNewFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    value={crystal.name}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Name of Crystal"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="color">Color: </label>
                <input 
                    id="color"
                    value={crystal.color}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Color of Crystal"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="hardness">Hardness: </label>
                <input 
                    id="hardness"
                    value={crystal.hardness}
                    type="number"
                    onChange={handleNewFormTextChange}
                    placeholder="Hardness of Crystal"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="rarity">Rarity: </label>
                <input 
                    id="rarity"
                    value={crystal.rarity}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Rarity of Crystal"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="cleansed">Can This Crystal Be Cleansed Using Water?</label>
                <input 
                    id="cleansed"
                    type="checkbox"
                    onChange={handleWaterCleansedCheckboxChange}
                    checked={crystal.can_be_water_cleansed}
                />
                <br/>
                <br/>
                <label htmlFor="healing_effects">Healing Effects: </label>
                <input 
                    id="healing_effects"
                    value={crystal.healing_effects}
                    type="text"
                    onChange={handleNewFormTextChange}
                    placeholder="Healing Effects of This Crystal"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="collected_on">Date Collected: </label>
                <input 
                    id="collected_on"
                    value={crystal.collected_on}
                    type="date"
                    onChange={handleNewFormTextChange}
                    placeholder="YYYY/MM/DD"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="favorite">Is This One of Your Favorite Crystals? </label>
                <input 
                    id="favorite"
                    type="checkbox"
                    onChange={handleFavoriteCheckboxChange}
                    checked={crystal.favorite}
                />
                <br/>
                <br/>
                <button type="submit">✅ 🆕 Add New Crystal to My List 🆕 ✅</button>
            </form>
            <br/>
            <button>
                <Link to={'/crystals'}>🔙 Return to My List 🔙</Link>
            </button>
        </div>
    )
};

export default CrystalNewForm;