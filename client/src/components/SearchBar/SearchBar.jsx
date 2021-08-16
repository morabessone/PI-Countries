import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";
import style from "./SearchBar.module.css"
import { RiSearch2Line } from "react-icons/ri"



const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getByName(search));
        setSearch("");
    } 


    const handleChange = async (e) => {
        await setSearch(e.target.value);
    }

    return (
        <div className={style.searchB}>
            <input className={style.input} type="text" placeholder="Insert country..." value={search} onChange={(e) => handleChange(e)}/>
            <button className={style.btn} type="submit" onClick={(e) => handleClick(e)}>
                <RiSearch2Line/>
            </button>
        </div>
    )

}

export default SearchBar;