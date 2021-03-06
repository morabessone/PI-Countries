const initialState = {
    countries: [],
    filterCountries: [],
    countryDetail: [],
    activities: [],
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
            case "GET_ACTIVITIES":
                return {
                    ...state,
                    activities: action.payload
                }
            case "FILTER_BY_CONTINENT":
                return {
                    ...state,
                    filterCountries: state.countries.filter(e => e.continent === action.payload)
                }
            case "FILTER_BY_ACTIVITY":
                return {
                    ...state,
                    filterCountries: state.countries.filter(e => {
                        const act = e.activities.map((a) => String(a.id));
                        return act.includes(action.payload)
                    })
                }
    
        default:
            return {
                state,
            };
    }
}

export default reducer;