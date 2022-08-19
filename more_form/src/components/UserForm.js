import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap | 1- in terminal :npm add bootstrap react-bootstrap ,2- we add import here


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [cPassword, setCPassword] = useState("");
    const [cPasswordError, setCPasswordError] = useState("");

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
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }else{
            setFirstNameError('')
        }
    }
        const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }else{
            setLastNameError('')
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }else{
            setEmailError('')
        }
    }
        const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }else{
            setPasswordError('')
        }
    }
    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        if(e.target.value.length < 1) {
            setCPasswordError("Confirm Password is required!");
        } else if(e.target.value !== password) {
            setCPasswordError("Passwords must match");
        }else{
            setCPasswordError('')
        }
    }

    return (
        <div class="container w-50 ">
        <div class=" d-flex row">
        <div class="col-7" >
            <form onSubmit={(e) => e.preventDefault()}>
            {/* {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
    } */}
            <div class="form-group" >
                <label>First Name: </label>
                <input type="text" class="form-control" onChange={handleFirstName} value={firstName}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div class="form-group" >
                <label>Last Name: </label>
                <input type="text" class="form-control" onChange={handleLastName}  value={lastName}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div class="form-group" >
                <label>Email Address: </label>
                <input type="email" class="form-control" onChange={handleEmail}  value={email}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div class="form-group" >
                <label>Password: </label>
                <input type="password" class="form-control" onChange={handlePassword} value={password} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div class="form-group" >
                <label>Confirm Password: </label>
                <input type="password"  class="form-control" onChange={handleCPassword} value={cPassword}/>
                {
                    cPasswordError ?
                    <p style={{color:'red'}}>{ cPasswordError }</p> :
                    ''
                }
            </div>
            {/* <input type="submit" class="btn btn-primary mt-4" value="Create User" />  */}
        </form>
        </div>
        </div>
        </div>
    );
};

export default UserForm;
