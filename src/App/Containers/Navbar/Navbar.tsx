// @ts-ignore
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";


export class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <div className='nav-bar'>
                    <BrowserRouter>
                        <Link className='Link' to="/">Home </Link>
                        <Link className='Link' to="/about">About </Link>
                    </BrowserRouter>
                </div>
            </nav>
        )
    }
}