import React, { Component } from 'react';
import axios from 'axios';

export default class MyUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    };

    uploadHandler = () => {
        console.log(this.state.selectedFile);
        axios.post('http://localhost:3000/manophoto', this.state.selectedFile);
    };

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileChangedHandler}></input>
                <button onClick={this.uploadHandler}>Upload!</button>
            </div>
        );
    }
}