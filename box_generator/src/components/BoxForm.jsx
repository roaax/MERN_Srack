import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxForm = (props) => {
    const [box, setBox] = useState("");
    const [boxWidth, setBoxWidth] = useState("100");
    const [boxHight, setBoxHight] = useState("100");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox({color:box,width:boxWidth,height:boxHight});
        setBox("");
        setBoxHight("")
        setBoxWidth("")
        
    };
    return (
        <div>
        <form onSubmit={ handleSubmit }>
            <div className='container d-felx m-4 '>
            <label className='text-primary m-4'>Box Generator:</label>
            <input onChange={ (e) => setBox(e.target.value)} type="text"  value={box}/>
            <label className='text-primary m-4'> Width:</label>
            <input onChange={ (e) => setBoxWidth(e.target.value)} type="text" value={boxWidth}/>
            <label className='text-primary m-4'> Height:</label>
            <input onChange={ (e) => setBoxHight(e.target.value)} type="text" value={boxHight}/>
            </div>
            <input className='btn btn-warning' type="submit" value="Creat Box" />
        </form>
        </div>
    );
};
    
export default BoxForm ; 