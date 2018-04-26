import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers.js";
import { search } from "imdb-api";
import { addFilmsToProps, displayError } from "./actions.js";

const callAjax = ({dispatch}) => {
    return next => action => {
        if (action.type === 'ADD_FILMS') {
            search(
                {
                    title: action.payload.search
                },
                {
                    apiKey: "751fe8cf"
                }
            )
                .then(response => {
                    dispatch(addFilmsToProps(response.results));
                })
                .catch(err => {
                    dispatch(displayError(err.message));
                });
        }
        return next(action);
    }
};

const log = () => next => action => {
    console.log('ACTION 1 = ', action);
    return next(action);
};

const middleware = [log, callAjax];

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);
