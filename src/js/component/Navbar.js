import { Link } from "react-router-dom";
import React from "react";

const Navbar= () => {
    return (
        <nav className="navbar col-12 bg-white mt-5">
            <div className="ms-5">
                <h1>Contact List</h1>
            </div>
            <form className=" ">
                <Link to="/add-contact" className="btn btn-primary ms-auto me-5">New contact</Link>
            </form>
        </nav>
    )
}

export default Navbar;