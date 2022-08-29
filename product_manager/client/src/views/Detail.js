import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
/*----------------------------
        Details Page
----------------------------*/
const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div className='container p-4 shadow-lg mt-4 text-center'>
            <h1>Product Details</h1>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
    
export default Detail;

