import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory,Link } from 'react-router-dom';

const Form = (props) => {
    //keep track of what is being typed via useState hook
    const history = useHistory();
    const [name, setName] = useState(""); 

    //--------Backend validation---------
    const [errors, setErrors] = useState([]); 
    //--------Frontend validation----------
    const [NameError, setNameError] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 1) {
            setNameError("Name is required!");
        } else if(e.target.value.length < 3) {
            setNameError("Name must be 3 characters or longer!");
        }else{
            setNameError('')
        }
    }

    /*----------------------------
            Handeler
    ----------------------------*/
    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        
        axios.post('http://localhost:8000/new', { //make a post request to create a new product 
            name, 
        })
            .then(res=>
                history.push("/")
            )
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }
    //onChange to update name

    /*----------------------------
            Add New Author Form
    ----------------------------*/
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className='container p-4 shadow-lg text-center mt-4'>
                <h1 className='text-dark m-4'>Favorite Auhtors</h1>
            {/* HOME BUTTON */}
            <Link to={"/"}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            </Link> 
            <h3>Add a new author</h3>
            <p>
                <label className='m-2'>Name </label>
                <input type="text" onChange={handleName} value={name}/>
                {/* Front end Validation */}
                {
                    NameError ?
                    <p style={{color:'red'}}>{ NameError }</p> :
                    ''
                }
            </p>
            {/* CANCEL BUTTON */}
            <Link to={"/"}><button className='btn btn-outline-success'>Cancel</button></Link>{" | "}
            {/* SUBMIT BUTTON */}
            <input type="submit" className='btn btn-outline-secondary'/> 
            </div>
        </form>
    )
}
export default Form;

