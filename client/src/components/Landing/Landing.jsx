import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";
import { useDispatch } from "react-redux";
import { showCountries } from "../../actions";

const Landing = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showCountries());
    })

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