import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from '../context/MyContext'


const Form = () =>{
    const context = useContext(MyContext);

    return(
        <div className="container">
            <form className="form-inline mt-4" role="form">
                <div className="form-group d-flex ">
                    <span className="col-2" >Your Name:</span>
                    <input
                        onChange={(e) => context.setName(e.target.value)}
                        type="text" name='name'
                        value={context.name}
                        className="form-control" placeholder="Entre Your Name"/>
                </div>
            </form>

        </div>
    )
}
export default Form;