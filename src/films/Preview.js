import React from "react";
import { connect } from "react-redux";

class Preview extends React.PureComponent {
    render() {
        return (
            <div>
                <button>{this.props.match.params.year}</button>
                <p>Preview</p>
                <p>Preview du Films sortis en {this.props.match.params.year} </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        years: state.years
    };
};

export default connect(mapStateToProps)(Preview)