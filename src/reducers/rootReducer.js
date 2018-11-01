const initState = {
    weather: [],
    forecast: {},
    dailyForecast: undefined,
    searchInput: '',
    location: 'Krakow',
    appid: '74ab00f9f5d6f488185edff7e764b725',
    loading: true
};

const rootReducer = (state = initState, action) => {
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

        case 'FETCH_DAILY_FORECAST':
            return {
                ...state,
                dailyForecast: action.dailyForecast
            };

        case 'UPDATE_SEARCH_INPUT':
            return {
                ...state,
                searchInput: action.searchInput
            };

        case 'UPDATE_WEATHER':
            return {
                ...state,
                location: action.location
            };
        case 'UPDATE_LOADER':
            return {
                ...state,
                loading: action.loading
            };

        default:
            return state;
    }
};

export default rootReducer;
