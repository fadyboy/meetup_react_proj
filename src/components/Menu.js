import React from 'react';

import  { Link } from 'react-router-dom';

const Menu = () => (
    <nav className="blue">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todo">ToDo</Link></li>
        </ul>
    </nav>
);

export default Menu;