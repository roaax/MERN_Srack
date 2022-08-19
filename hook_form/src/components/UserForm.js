import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap | 1- in terminal :npm add bootstrap react-bootstrap ,2- we add import here


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password , cPassword };
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setCPassword("")
        console.log("Welcome", newUser); // console obj
    };

    return (
        <div class="container w-50 ">
        <div class=" d-flex row">
        <div class="col-7" >
            <form onSubmit={createUser}>
            <div class="form-group" >
                <label>First Name: </label>
                <input type="text" class="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div class="form-group" >
                <label>Last Name: </label>
                <input type="text" class="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </div>
            <div class="form-group" >
                <label>Email Address: </label>
                <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)}  value={email}/>
            </div>
            <div class="form-group" >
                <label>Password: </label>
                <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)}  value={password} />
            </div>
            <div class="form-group" >
                <label>Confirm Password: </label>
                <input type="password"  class="form-control" onChange={(e) => setCPassword(e.target.value)} value={cPassword}/>
            </div>
            {/* <input type="submit" class="btn btn-primary mt-4" value="Create User" />  */}
        </form>
        </div>

        {/* ------------------------------------show your data from the form---------------------------------------------- */}
        <div class="col-6" >
                <h1 class="text-primary mt-4">Your Form Data</h1>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th>First Name: </th>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <th>Last Name: </th>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <th>Email: </th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th>Password: </th>
                            <td>{password}</td>
                        </tr>
                        <tr>
                            <th>Confirm Password: </th>
                            <td>{cPassword}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
    );
};

export default UserForm;
