import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function CrystalEditForm() {
    let { id } = useParams();
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
    
    const updateCrystal = ()=>{    
        const editedCrystalData = {
            name: crystal.name,
            color: crystal.color,
            hardness: crystal.hardness,
            rarity: crystal.rarity,
            can_be_water_cleansed: false,
            healing_effects: crystal.healing_effects,
            collected_on: crystal.collected_on,
            favorite: false
        }

        try {
            fetch(`${API}/crystals/${id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedCrystalData)
            })
            .then((res)=>res.json())
            .then(()=>{
                navigate(`/crystals/${id}`)
            })
        } catch (error) {
            return error
        }
    };
    
    useEffect(()=>{
        fetch(`${API}/crystals/${id}`)
        .then((res)=> res.json())
        .then((resJSON)=>{
            setCrystal(resJSON)
        })
        .catch((error) => console.error("show", error))
    }, [id]);
    
    const handleEditFormTextChange = (e)=>{
        setCrystal({ ...crystal, [e.target.id]: e.target.value})
    };
    
    const handleWaterCleansedCheckboxChange = ()=>{
        setCrystal({ ...crystal, can_be_water_cleansed: !crystal.can_be_water_cleansed})
    };
    
    const handleFavoriteCheckboxChange = ()=>{
        setCrystal({ ...crystal, favorite: !crystal.favorite})
    };
    
    const handleEditFormSubmit = (e)=>{
        e.preventDefault()
        updateCrystal()
    };
    return (
        <div>
            <h1>🚧 Edit {crystal.name} 🚧</h1>
            <form onSubmit={handleEditFormSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    value={crystal.name}
                    type="text"
                    onChange={handleEditFormTextChange}
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
                    onChange={handleEditFormTextChange}
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
                    onChange={handleEditFormTextChange}
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
                    onChange={handleEditFormTextChange}
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
                    onChange={handleEditFormTextChange}
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
                    onChange={handleEditFormTextChange}
                    placeholder="date"
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
                <button type="submit">🚧 Edit {crystal.name} 🚧</button>
            </form>
            <br/>
            <button>
                <Link to={`/crystals/${id}`}>❌🚧 Don't Edit {crystal.name} 🚧❌</Link>
            </button>
            <br/>
            <br/>
            <button>
                <Link to={'/crystals'}>🔙 Return to My List 🔙</Link>
            </button>
        </div>
    )
};

export default CrystalEditForm;