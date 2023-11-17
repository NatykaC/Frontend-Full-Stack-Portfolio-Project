import {useState, useEffect} from "react";
import Crystal from "./Crystal.jsx";

const API = import.meta.env.VITE_API_URL;

function Crystals() {
    const [crystals, setCrystals] = useState([]);

    useEffect(()=>{
        const fetchCrystalsData = async()=>{
            try {
                fetch(`${API}/crystals`)
                .then(res=>res.json())
                .then(res=>{
                    setCrystals(res)
                })
            } catch (error) {
                return error
            }
        }
        fetchCrystalsData()
    }, []);

    return (
        <div>
            <h1>
                {crystals.map((crystal)=>{
                    return <Crystal key={crystal.id} crystal={crystal}/>
                })}
            </h1>
        </div>
    )
};

export default Crystals;