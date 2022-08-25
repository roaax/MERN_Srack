import React from 'react';
import { Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () =>{


    return(
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand text-light" href="#" >
                    <Link class="btn btn-light" to="/home">Home</Link>
                    {/* <Link to="/word">Word</Link> */}
                    {/* <Link to="/:word/:tColor/:bColor">Color </Link> */}
                    </div>
                </div>                        
            </nav>
        </div>
    )
}
export default Nav;