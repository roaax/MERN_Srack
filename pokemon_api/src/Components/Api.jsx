import React from "react";
import { useState } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Api=()=>{
    const[state, setState]=useState([]);
    const add=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{return response.json()})
            .then(response=>{setState(response.results);
            })}
    return(
        <div className="container shadow-lg ">
            <button className="btn btn-dark m-4" onClick={add} >Fetch Pokemon</button>
            {state.map((item,index)=>{
                return(<div key={index}>
                    <ul>
                        <li>
                            {item.name}
                        </li>
                    </ul>
                </div>)
            })}
        </div>
    )
}

export default Api;
