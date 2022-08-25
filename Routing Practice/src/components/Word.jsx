import React from "react";
import { useParams } from "react-router-dom";

const Word = (props)=>{
    const {word} = useParams();
    return(
        <>
        {
        isNaN(word)?
        <h1>The word is: {word}</h1>:
        <h1>The Number is: {word}</h1>
        }
        </>
    )
}
export default Word;