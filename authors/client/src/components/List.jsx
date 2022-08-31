import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


// function to display all authors
const List = (props) => {
    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
        return (
            <div className='container text-center'>
                <Link to={"/new"}><h5 className='btn btn-outline-warning'>Add an Author</h5></Link>
                <h3>We have quotes by:</h3>
                <table className='table table-striped  '>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                <tbody>
                {
                    props.author.map((author, i) => {
                        return (
                        <>
                            <tr>
                                <td><span className='container text-center' key={i}> {author.name}</span></td>
                                
                                <td>
                                    {/* EDIT BUTTON */}
                                    <Link to={"/edit/"+author._id}><span className='btn btn-outline-success'>Edit</span></Link> { " | "}
                                    {/* DELETE BUTTON */}
                                    <button className='btn btn-outline' onClick={()=>{handleDelete(author._id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                    </button>
                                </td>    
                            </tr>
                        </>
                        )
                    })
                }
                </tbody>
                </table>
            </div>
            
        );
    } 

    export default List;
