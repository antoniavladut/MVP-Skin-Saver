import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return (
        <nav className = "NavBar">
            <ul>
                <li><NavLink to="/home" end>Home</NavLink></li>
                <li><NavLink to="/skinquiz">Skin Quiz</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </nav>
    );

}

export default NavBar;