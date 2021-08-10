import React from "react";
import { NavLink } from "react-router-dom";
import Order from "../Order/Order";
import SearchBar from "../SearchBar/SearchBar"


const NavBar = () => {
    const refresh = () => {
        console.log(window.location)
        if (window.location.pathname === "/home" ) {
            window.location.reload();
        } else {
            window.location.replace("http://localhost:3000/home")
        }
    }
    return (
        <div>
            <button onClick={refresh}> Home </button>                    
            <SearchBar />
            <Order />
            <NavLink to = "/createActivity">
                <button>
                    Create activity
                </button>
            </NavLink>
        </div>
    )
}

export default NavBar;