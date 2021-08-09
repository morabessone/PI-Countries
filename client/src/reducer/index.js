const initialState = {
    countries: [],
    filterCountries: [],
    countryDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_COUNTRIES":
            return {
                ...state,
                filterCountries: action.payload,
                countries: action.payload,
            }
            case "GET_COUNTRY":
                return {
                    ...state,
                    filterCountries: action.payload
                }
            case "ORDER_AZ": 
                return {
                    ...state,
                    filterCountries: action.payload
                }
            case "ORDER_ZA":
                return {
                    ...state,
                    filterCountries: action.payload
                }
            case "ORDER_POP_MAJ":
                return {
                    ...state,
                    filterCountries: action.payload
                }
            case "ORDER_POP_MIN":
                return {
                    ...state,
                    filterCountries: action.payload
                }
            case "GET_DETAIL":
                console.log("reducer")
                return {
                    ...state,
                    countryDetail: action.payload
                }
    
        default:
            return {
                state,
            };
    }
}

export default reducer;