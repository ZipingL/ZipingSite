// @ts-ignore
import React from "react";
import {BrowserRouter, Link, NavLink} from "react-router-dom";


export class Navbar extends React.Component {
    render() {
        return(
            <nav className='nav-bar'>
                <div className='nav-bar-links'>
                    <BrowserRouter>
                        <NavLink exact className='Link' activeClassName='LinkActive' to="/">Home </NavLink>
                        <NavLink className='Link' activeClassName='LinkActive' to="/about">About </NavLink>
                    </BrowserRouter>
                </div>
            </nav>
        )
    }
}