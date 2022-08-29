import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(""); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description
        })
            .then(()=>{
                axios.get('http://localhost:8000/api/product')
                .then(res => {
                    //set and refresh the page 
                    props.sendTrigger(res.data)
                })
            })
            .catch(err=>console.log(err))
    }
    //onChange to update title , price and description

    /*----------------------------
            Product Form
    ----------------------------*/
    return (
        <form onSubmit={onSubmitHandler}>
            <div className='container p-4 shadow-lg text-center'>
                <h1 className='text-dark m-4'>Product Manager</h1>
            <p>
                <label className='m-2'>Title </label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label className='m-2'>Price </label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label className='m-2'>Description </label> 
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" className='btn btn-outline-secondary'/>
            </div>
        </form>
    )
}
export default ProductForm;

