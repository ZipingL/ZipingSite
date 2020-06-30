// @ts-ignore
import logo from "../../logo.svg";
import React from "react";
import {Link} from "react-router-dom";


export class Navbar extends React.Component {
    render() {
        return(
            <div className='nav-bar'>
                <Link className='Link' to="/">Home </Link>
                <Link className='Link' to="/about">About </Link>
            </div>
        )
    }
}