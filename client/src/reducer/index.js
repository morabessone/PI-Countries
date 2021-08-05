const initialState = {
    countries: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
            }
    
        default:
            return {
                state,
            };
    }
}

export default reducer;