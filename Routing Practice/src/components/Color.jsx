import React from "react";
import { useParams } from "react-router-dom";

const Color = (props) =>{
    const {word,tColor,bColor} = useParams();
    return(
        <>
        <h1 style={{color:tColor,backgroundColor:bColor}} >The Word is: {word}</h1>
        </>
    )
}
export default Color;