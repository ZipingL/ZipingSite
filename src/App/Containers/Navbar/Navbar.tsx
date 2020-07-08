// @ts-ignore
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";


export class Navbar extends React.Component {
    render() {
        return(
            <nav className='nav-bar'>
                <div className='nav-bar-links'>
                    <BrowserRouter>
                        <Link className='Link' to="/">Home </Link>
                        <Link className='Link' to="/about">About </Link>
                    </BrowserRouter>
                </div>
            </nav>
        )
    }
}