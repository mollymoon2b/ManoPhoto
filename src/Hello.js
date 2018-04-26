import React from "react";
import { connect } from "react-redux";
import { updateFilms, addFilms, sortAsc, sortDes, filterYearFilm } from "./actions.js";
import { Route } from 'react-router-dom';
import Preview from './films/Preview';
import detectDevice from "./HOC/detectDevice.js";

class Hello extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }

    handleChange = event => {
        this.setState({ input: event.target.value });
    };

    handleClick = () => {
        this.props.addFilms(this.state.input);
    };

    handleClickFilter = () => {
        this.props.filterYearFilm(parseInt(this.props.match.params.year, 10));
    };

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} />
                    <button onClick={this.handleClick} type="button">
                        search
                    </button>
                </form>
                <button onClick={this.props.sortAsc}> + jeune au - </button>
                <button onClick={this.props.sortDes}> - jeune au + </button>
                {this.props.match.params.year ? <button onClick={this.handleClickFilter}>{this.props.match.params.year}</button> : ''}
                {this.props.error ? <p> {this.props.error} </p> : '' }
                <ul>
                    {this.props.films.map(item => {
                        return (
                            <li key={item.imdbid}>
                                <p>
                                    {item.title} - {item.year}
                                </p>
                                <img alt={item.title} src={item.poster} width="50px" />
                            </li>
                        );
                    })}
                </ul>
                {this.props.data === 'Desktop' ? <Route path="/films/:year" component={Preview} /> : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        films: state.films,
        filmsFilter: state.filmsFilter,
        error: state.error
    };
};

const mapDispatchToProps = {
    updateFilms,
    addFilms,
    sortAsc,
    sortDes,
    filterYearFilm
};

export default connect(mapStateToProps, mapDispatchToProps)(detectDevice(Hello));
