import React from "react";
import '../App.css';
const Tab = (props)=>{
    const openTab=(e)=>{
        props.show(
            props.children
        );
    }

    return(
        <>
        <button onClick={openTab}  >
           <span> {props.name ? props.name : "Tab"} </span>
        </button>
        </>
    )
}

export default Tab;