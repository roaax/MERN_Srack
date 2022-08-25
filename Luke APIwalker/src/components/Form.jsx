import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();
    
    const submit = (e) => {
        e.preventDefault();
        history.push(`/${name}/${id}`);
    }
    
    return (

        <nav className="navbar bg-light">
                <div className="navbar-brand">
                    <form class="d-flex" onSubmit={ submit }>
                        <div class="me-4">
                            <div class="d-flex">
                                <label class="form-label me-2">Search For: </label>
                                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange ={(e) => setName(e.target.value)} value={name} >
                                            <option value="people">People</option>
                                            <option value="planet">Planet</option>
                                    </select>
                            </div>
                        </div>
                        <div class="me-4">
                            <div class="d-flex">
                                <label for="" class="col-sm-2 col-form-label">ID</label>
                                    <input type="text" class="form-control"  onChange={ (e) => setId(e.target.value) } value={ id } />
                            </div>
                        </div>
                        <div class="me-4">
                        <input type="submit" value="Search"  class="btn btn-dark" />
                        </div>
                    </form>
                </div>
        </nav>
    );
}
export default Form