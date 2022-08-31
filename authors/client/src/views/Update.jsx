import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const history = useHistory();
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

    useEffect( ()=>   {
        axios.get("http://localhost:8000/"+id)
        .then(res => {
            setName(res.data.name) 
        })
        .catch(err => console.error(err))
    },[id])

/*----------------------------
            Update Handeler
    ----------------------------*/
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/edit/' + id, {
            name
        })
            .then(
                res => 
                history.push("/")
            )
            .catch(err => {
                console.log(err.response.data)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)) {
                    errArr.push(errorObj[key].message)
                }
                setErrors(errArr)
            })

    }

    /*---------------------------------
            Update | Edit Author Form
    -----------------------------------*/
    return (
        <div className='container shadow-lg text-center p-4 mt-4'>

            <h1>Favorite Author</h1>
            {/* HOME BUTTON */}
            <Link to={"/"}  >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            </Link>
            <h3>Edit this author</h3>

            <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label className='m-2'>Name</label> 
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={handleName} />
                    {
                    NameError ?
                    <p style={{color:'red'}}>{ NameError }</p> :
                    ''
                }
                </p>
                {/* CENCEL BUTTON */}
                <Link to={"/"}><button className='btn btn-outline-success'>Cancel</button></Link> {" | "}
                {/* SUBMIT BUTTON */}
                <input type="submit" className='btn btn-outline-secondary'/>
            </form>

        </div>
    )
}
    
export default Update;

