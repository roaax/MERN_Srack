import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BoxDisplay = (props) => {
    return (
        <div style={{display:"flex"}} className="container m-4 text-center">
            {props.colorBoxes.map((box,i)=>{
                return(
                    <div key={i} style={{
                        backgroundColor: box.color, 
                        width: box.width + "px", height: box.height + "px"}}>
                        </div>
                );
            })}
        </div>
    );
};
export default BoxDisplay;