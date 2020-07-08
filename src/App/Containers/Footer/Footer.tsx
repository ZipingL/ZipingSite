// @ts-ignore
import React from "react";
import {BrowserRouter, Link} from "react-router-dom";


export class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <div className='footer-links'>
                    <a className='Link' href="https://reactjs.org">Learn React </a>
                    <a className='Link' href="https://single-spa.js.org/">Learn single-spa </a>
                </div>
            </footer>
        )
    }
}