import axios from "axios";

export function showCountries() {
    return async function(dispatch) {
        const countries = await axios.get("http://localhost:3001/countries")
            dispatch({
                type: "SHOW_COUNTRIES", 
                payload: countries.data
            })
    
    }
} 

export function getByName(name) {
    console.log("entre a la action")
    return function(dispatch) {
        return axios.get("http://localhost:3001/countries/?name=" + name)
        .then(resp => {
            dispatch({
                type: "GET_COUNTRY",
                payload: resp.data
            })
        })
    }
}

export function orderNameAZ() {
    return function(dispatch) {
        return axios.get("http://localhost:3001/countries")
        .then(resp => {
            const orderByAZ = resp.data.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
            dispatch({
                type: "ORDER_AZ",
                payload: orderByAZ
            })
        })
    }
} 

export function orderNameZA() {
    console.log("entre a la action")
    return function(dispatch) {
        return axios.get("http://localhost:3001/countries")
        .then(resp => {
            const orderByZA = resp.data.sort((b, a) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
            dispatch({
                type: "ORDER_ZA",
                payload: orderByZA
            })
        })
    }
} 

export function orderPopMaj() {
    return function(dispatch) {
        return axios.get("http://localhost:3001/countries")
        .then(resp => {
            const popMaj = resp.data.sort((b, a) => {
                if (a.population > b.population) return 1;
                if (a.population < b.population) return -1;
                return 0;
            })
            dispatch({
                type: "ORDER_POP_MAJ",
                payload: popMaj
            })
        })
    }
}

export function orderPopMin() {
    return function(dispatch) {
        return axios.get("http://localhost:3001/countries")
        .then(resp => {
            const popMin = resp.data.sort((a, b) => {
                if (a.population > b.population) return 1;
                if (a.population < b.population) return -1;
                return 0;
            })
            dispatch({
                type: "ORDER_POP_MIN",
                payload: popMin
            })
        })
    }
}

export function getDetail(id) {
    console.log("action")
    console.log(id)
    return async function(dispatch) {
        return await axios.get("http://localhost:3001/countries/" + id)
        .then(resp => {
            dispatch({
                type: "GET_DETAIL",
                payload: resp.data
            })
        })
    }
}