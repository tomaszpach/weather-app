const initState = {
    weather: {},
    forecast: {},
    loading: true
};

const rootReducer = (state = initState, action) => {
    console.log(state);
    // console.log('action', action);
    switch (action.type) {
        case 'FETCH_WEATHER':
            return {
                ...state,
                weather: [action.weather],
                loading: false
            };

        case 'FETCH_FORECAST':
            return {
                ...state,
                forecast: [action.forecast],
                loading: false
            };

        default:
            return state;
    }
};

export default rootReducer;
