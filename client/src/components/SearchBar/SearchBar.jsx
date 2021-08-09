import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";


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
        <div>
            <input type="text" placeholder="Insert country..." value={search} onChange={(e) => handleChange(e)}/>ç
            <button type="submit" onClick={(e) => handleClick(e)}>
                Search
            </button>
        </div>
    )

}

export default SearchBar;