import axios from "axios";
import React,{useState , useEffect } from "react";
import { useParams } from "react-router-dom";


const People =()=>{
    const {id} = useParams();
    const [people , setPeople] = useState({});
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response)
            setPeople(response.data)

        })
        .catch(err => console.log(err))
    },[id]);
    
    return(
        <>
        <h1>{people.name}</h1>
        <p>Height: {people.height}</p>
        <p>Mass: {people.mass}</p>
        <p>Hair Color: {people.hair_color}</p>
        <p>Skin Color: {people.skin_color}</p>
        </>
    )
}

export default People;

