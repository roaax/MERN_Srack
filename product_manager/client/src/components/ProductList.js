import React from 'react'
import {Link} from "react-router-dom";
    

// function to display all products
const ProductList = (props) => {
    
    return (
        <div className='container text-center'>
            <h1>All Products:</h1>
        {
            props.product.map((product,i) =>{
                return (
                    <p className='container text-center' key={i}><Link to={"/product/"+product._id}> {product.title}</Link></p>
                )
            })
        }
        </div>
    );
    
}
export default ProductList;

