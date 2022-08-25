import React,{useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Planet =()=>{
    const {id} = useParams();
    const [planet , setPlanet] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(response=>{
            console.log(response)
            setPlanet(response.data)
        })
        .catch(err => console.log(err))
    },[id]);
    
    return(
        <>
        <h1>{planet.name}</h1>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface Water: {planet.surface_water}</p>
        <p>Population: {planet.population}</p>
        </>
    )
}

export default Planet;

