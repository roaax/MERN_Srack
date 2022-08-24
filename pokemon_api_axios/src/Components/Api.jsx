import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Axios =() => {
    const [people, setPeople] = useState([]);
    const add=()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => setPeople(response.data.results))};
    return(
        <div>
            <button type="button" className="btn btn-outline-dark mt-4 mb-4" onClick={add} >Fetch Pokemon </button>
            {people.map((item,index)=>{
                return(
                    <div key={index}>
                        <ul>
                            <li>
                                {item.name}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
export default Axios