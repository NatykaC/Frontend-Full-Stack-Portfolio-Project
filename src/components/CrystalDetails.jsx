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

    let {id}=useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        const fetchOneCrystal = async()=>{
            try {
                fetch(`${API}/crystals/${id}`)
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
        const confirmDeleteBox = window.confirm("🚨 WAIT!!!!! Are you sure you want to 💥 delete 💥 this crystal? 🚨")
        if(!confirmDeleteBox){
            return
        }
        try {
            fetch(`${API}/crystals/${id}`, {
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
                    When Was This Crystal Added To My List?<br/>{crystal.collected_on}
                    <br/>
                    <br/>
                    Is This Crystal A Favorite?<br/>{crystal.favorite ? <span>❤️ YES ❤️</span> : <span>💔 NO 💔</span>} 
                </h3>
                <div>
                    <button>
                        <Link to={'/crystals'}>🔙 Return to My List 🔙</Link>
                    </button>
                </div>
                <br/>
                <div>
                    <button>
                        <Link to={`/crystals/${id}/edit`}>🚧 Edit {crystal.name} 🚧</Link>
                    </button>
                </div>
                <br/>
                <div>
                    <button onClick={HandleDeleteCrystal}>💥 Delete {crystal.name} 💥</button>
                </div>
            </div>
        </div>
    )
};

export default CrystalDetails;