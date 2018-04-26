import React from "react";
import { Route, Switch } from 'react-router-dom';
import Hello from '../Hello';
import { connect } from "react-redux";
import { filterYearFilm } from "./../actions.js";

class Films extends React.PureComponent {
    render() {
        return (
            <div>
                <Route path="/films" component={Hello} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        years: state.years
    };
};

const mapDispatchToProps = {
    filterYearFilm
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);