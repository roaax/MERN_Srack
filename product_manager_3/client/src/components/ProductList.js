import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


// function to display all products
const ProductList = (props) => {


    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/product/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
        return (
            <div className='container text-center'>
                <h1>All Products:</h1>
                {
                    props.product.map((product, i) => {
                        return (
                            <>
                                <span className='container text-center' key={i}><Link to={"/product/" + product._id}> {product.title}</Link></span>
                                <button className='btn btn-outline' onClick={()=>{handleDelete(product._id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                </button>
                            </>
                        )
                    })
                }
            </div>
        );
    } 

    export default ProductList;
