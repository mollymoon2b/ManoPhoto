const reducers = (state = { films: [] }, action) => {
    switch (action.type) {
        case "ADD_FILMS": {
            return {
                ...state,
                error: '',
                films: action.payload.films
            };
        }
        case "SORT_ASC": {
            state.films.sort((a, b) => {
                return b.year - a.year;
            });
            return {
                ...state,
                error: '',
                films: [].concat(state.films)
            };
        }
        case "SORT_DES": {
            state.films.sort((a, b) => {
                return a.year - b.year;
            });
            return {
                ...state,
                error: '',
                films: [].concat(state.films)
            };
        }
        case "ADD_FILMS_TO_PROPS" : {
            return {
                ...state,
                error: '',
                films: action.payload.films
            }
        }
        case "FILTER_YEAR_FILM" : {
            const test = state.films.filter(films => films.year === action.payload.year);
            return {
                ...state,
                error: '',
                filmsFilter: test
            }
        }
        case "DISPLAY_ERROR": {
            return {
                ...state,
                error: action.payload.error
            };
        }
        default:
            return state;
    }
};

export default reducers;
