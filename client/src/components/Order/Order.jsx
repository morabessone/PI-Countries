import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderNameAZ, orderNameZA, orderPopMaj, orderPopMin } from "../../actions";

const Order = () => {
    
    const dispatch = useDispatch();

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

    return (
        <div>
            <button onClick={(e) => orderByAZ(e)}>A-Z</button>
            <button onClick={(e) => orderByZA(e)}>Z-A</button>
            <button onClick={(e) => orderPopMajor(e)}>Pop: + to -</button>
            <button onClick={(e) => orderPopMinor(e)}>Pop: - to +</button>
        </div>
    )
    
}

export default Order;