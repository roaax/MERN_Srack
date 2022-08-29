import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id]);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then()
            .catch(err => console.error(err));
            // i can use the path ""/product/" +id" it will redirect me to the detail page 
            history.push("/product")
    }
    
    return (
        <div className='container shadow-lg text-center p-4 mt-4'>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label className='m-2'>Title</label> 
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label className='m-2'>Price</label>
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label className='m-2'>Description</label>
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" className='btn btn-outline-secondary'/>
                
            </form>
        </div>
    )
}
    
export default Update;

