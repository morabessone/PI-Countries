import axios from "axios";

export function showCountries(dispatch) {
    return async function(dispatch) {
        const countries = await axios.get("http://localhost:3001/countries")
            dispatch({
                type: "SHOW_COUNTRIES", 
                payload: countries.data
            })
    
    }
} 