export const updateFilms = (fn) => ({
    type: "UPDATE_FILMS",
    payload: {
        fn
    }
});

export const addFilms = (search, films = []) => ({
    type: "ADD_FILMS",
    payload: {
        search,
        films
    }
});

export const addFilmsToProps = (films = []) => ({
    type: "ADD_FILMS_TO_PROPS",
    payload: {
        films
    }
});

export const displayError = (error) => ({
    type: "DISPLAY_ERROR",
    payload: {
        error
    }
});

export const sortAsc = (films) => ({
    type: "SORT_ASC",
    payload: {
        films
    }
});

export const sortDes = (films) => ({
    type: "SORT_DES",
    payload: {
        films
    }
});

export const filterYearFilm = (year) => ({
    type: "FILTER_YEAR_FILM",
    payload: {
        year
    }
});

