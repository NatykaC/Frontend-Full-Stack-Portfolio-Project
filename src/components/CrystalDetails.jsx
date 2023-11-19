import {useParams, useNavigate, Link} from "react-router-dom";
import {useState, useEffect} from "react";

const API = import.meta.env.VITE_API_URL;

function CrystalDetails() {
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

    let {index}=useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        const fetchOneCrystal = async()=>{
            try {
                fetch(`${API}/crystals/${index}`)
                .then(res=>res.json())
                .then(res=>{
                    setCrystal(res)
                })
            } catch (error) {
                return error
            }
        }
        fetchOneCrystal()
    }, []);

    const HandleDeleteCrystal = ()=>{
        try {
            fetch(`${API}/crystals/${index}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(crystal)
            })
            .then(res=>res.json())
            .then(()=>navigate("/crystals"))
        } catch (error) {
            return error
        }
    };

    return (
        <div>
            <div>
                <h3>
                    Crystal Name:<br/>{crystal.name}
                    <br/>
                    <br/>
                    Crystal Color:<br/>{crystal.color}
                    <br/>
                    <br/>
                    Crystal Hardness:<br/>{crystal.hardness}
                    <br/>
                    <br/>
                    Crystal Rarity:<br/>{crystal.rarity}
                    <br/>
                    <br/>
                    Can This Crystal Be Cleansed Using Water?<br/>{crystal.can_be_water_cleansed ? <span>💧✅ YES ✅💧</span> : <span>💧❌ NO ❌💧</span>}
                    <br/>
                    <br/>
                    What Are The Healing Effects For This Crystal?<br/>{crystal.healing_effects}
                    <br/>
                    <br/>
                    When Was This Crystal Created?<br/>{crystal.collected_on}
                    <br/>
                    <br/>
                    Is This Crystal One Of Your Favorites?<br/>{crystal.favorite ? <span>❤️ YES ❤️</span> : <span>💔 NO 💔</span>} 
                </h3>
                <div>
                    <button>
                        <Link to={'/crystals'}>Back to My Crystals List</Link>
                    </button>
                </div>
                <div>
                    <button>
                        <Link to={`/crystals/${index}/edit`}>Edit {crystal.name}</Link>
                    </button>
                </div>
                <div>
                    <button onClick={HandleDeleteCrystal}>Delete {crystal.name}</button>
                </div>
            </div>
        </div>
    )
};

export default CrystalDetails;