import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap | 1- in terminal :npm add bootstrap react-bootstrap ,2- we add import here


/*--------------------------------
------------Reducer---------------
-----------------------------------*/
const initialState = {
    firstName: { //first name <- is the type .. {}<-inside it is payload
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

/*--------------------------------
------------Reducer---------------
-----------------------------------*/
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

/*--------------------------------
---------------Main---------------
-----------------------------------*/
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const HandelSubmit= (e) =>{
        e.preventDefault()
        const {firstName, lastName , email} = state;
        if(firstName.error == null && lastName.error == null && email.error == null){
            alert(" Done ")
            
        }else{
            alert(" You have an error ")
        }
    }

    /*--------------------------------
    ------------Handlers | validations ---------------
    -----------------------------------*/
    const Handler = (e) => {
        const { name, value } = e.target
        let error = null;
        if(name === "firstName"){
        if (value.length < 4) {
            error = "First Name must be at least 3 characters";
        }
    }
    if(name === "lastName"){
        if (value.length < 4) {
            error = "Last Name must be at least 3 characters";
        }
    }

    if(name === "email"){
        if (value.length < 5) {
            error = "Email must be at least 5 characters";
        }
    }
        dispatch({
            type: name,
            payload: { value: value, error: error }
        })
    }



            /*--------------------------------
            ------ Form & Error Messages -----
            -----------------------------------*/

            return (
                <form onSubmit={HandelSubmit}>
                    <div>
                        <label>
                            <span>First Name:</span>
                            <input
                                name="firstName"
                                type="text"
                                className='form-control'
                                value={state.firstName.value}
                                onChange={Handler}
                            />
                        </label>
                        {state.firstName.error != null && (
                            <p className='text-danger' >
                                {state.firstName.error}
                            </p>
                        )}
                    </div>


                    <div>
                        <label>
                            <span>Last Name:</span>
                            <input
                                name="lastName"
                                type="text"
                                className='form-control'
                                value={state.lastName.value}
                                onChange={Handler}
                            />
                        </label>
                        {state.lastName.error != null && (
                            <p className='text-danger' >
                                {state.lastName.error}
                            </p>
                        )}
                    </div>


                    <div>
                        <label>
                            <span>Email:</span>
                            <input
                                name="email"
                                type="email"
                                className='form-control'
                                value={state.email.value}
                                onChange={Handler}
                            />
                        </label>
                        {state.email.error != null && (
                            <p className='text-danger' >
                                {state.email.error}
                            </p>
                        )}
                    </div>
                    <div>
                    </div>
                    <button type='submit' className='btn btn-primary m-4' > Submit </button>
                </form>
            );
        }

