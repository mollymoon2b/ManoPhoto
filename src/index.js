import React from 'react';
import { render } from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Hello from './Hello.js';
import Test from './vrac/index-old.js';
import Films from './films/Films.js';
import Manophoto from './manophoto/Manophoto.js';

const Home = () => <h2>Home</h2>;

const BasicExample = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Oh-mon-Dieu">test</Link></li>
                    <li><Link to="/Les-Meilleurs-films-du-monde">hello</Link></li>
                    <li><Link to="/films">films</Link></li>
                    <li><Link to="/Manophoto">Manophoto</Link></li>
                </ul>

                <Route exact path="/" component={Home}/>
                <Route path="/Oh-mon-Dieu" component={Test}/>
                <Route path="/Les-Meilleurs-films-du-monde" component={Hello}/>
                <Route path="/Films/" component={Films}/>
                <Route path="/Manophoto/" component={Manophoto}/>
            </div>
        </BrowserRouter>
    </Provider>
);

render(<BasicExample />, document.getElementById("root"));