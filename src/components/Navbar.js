import React from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";

  

const Navbar = () => {
    let location = useLocation();
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/login");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Infinity Bazaar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/contactus"? "active": ""}`} aria-current="page" to="/contactus">Contact Us</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button className="btn btn-primary mx-1" onClick={handleLogout}>logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar