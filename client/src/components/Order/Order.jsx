import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity, filterByContinent, getActivities, orderNameAZ, orderNameZA, orderPopMaj, orderPopMin } from "../../actions";

const Order = () => {
    
    const dispatch = useDispatch();

    const activs = useSelector(state => state.activities);

    function orderByAZ(e) {
        e.preventDefault();
        dispatch(orderNameAZ());
    }
    function orderByZA(e) {
        e.preventDefault();
        dispatch(orderNameZA());
    }
    function orderPopMajor(e) {
        e.preventDefault();
        dispatch(orderPopMaj());
    }
    function orderPopMinor(e) {
        e.preventDefault();
        dispatch(orderPopMin());
    }
    function filterBy(e) {
        dispatch(filterByContinent(e.target.value))
    }
    function filterByAct(e) {
        dispatch(filterByActivity(e.target.value))
    }
    useEffect(() => {
        dispatch(getActivities())
    }, []);

    return (
        <div>
            <button onClick={(e) => orderByAZ(e)}>A-Z</button>
            <button onClick={(e) => orderByZA(e)}>Z-A</button>
            <button onClick={(e) => orderPopMajor(e)}>Pop: + to -</button>
            <button onClick={(e) => orderPopMinor(e)}>Pop: - to +</button>
            <select name="continent" onChange={filterBy}>
                <option disabled>Continent</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <select name="activity" onChange={filterByAct}>
                {
                    activs?.map((e) => 
                        <option value={e.id} key={e.id}>{e.name}</option>
                    )
                }

            </select>
        </div>
    )
    
}

export default Order;