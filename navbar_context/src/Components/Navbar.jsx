import React, { useContext } from 'react';
import MyContext from '../context/MyContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () =>{
    const context = useContext(MyContext);

    return(
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand text-light" href="#" >
                        <h1> Hi {context.name}</h1>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
