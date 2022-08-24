import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from '../context/MyContext'
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = () =>{
    const[name,setName]=useState("");
    return(
        <div>
            <MyContext.Provider value={{ name, setName }}>
                <Navbar/>
                <FormWrapper />
            </MyContext.Provider>
        </div>
    )
}
export default Wrapper;
