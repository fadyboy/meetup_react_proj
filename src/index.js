import React from 'react';
import { render } from 'react-dom';
import "babel-core/register";
import "babel-polyfill";
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
);