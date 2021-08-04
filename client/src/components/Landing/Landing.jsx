import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.background}>
            <NavLink exact to = "/home">
                <button className={style.btn}>
                    START
                </button>
            </NavLink>
        </div>
    )
}

export default Landing;