import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <nav className = "NavBar">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/skinquiz">Skin Quiz</NavLink></li>
                <li><NavLink to="/results">Results</NavLink></li>
            </ul>
        </nav>
    );

}

export default NavBar;