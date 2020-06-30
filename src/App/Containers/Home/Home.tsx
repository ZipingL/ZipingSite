// @ts-ignore
import logo from "../../logo.svg";
import React from "react";

export class Home extends React.Component {
render() {
    return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
            Hey I'm Ziping Liu. You can also call me Z. Welcome to my resume website.
            <br/>
            <br/>
            I'm a recent graduate in computer engineering from UT Austin. I'm trying to learn web development
            <br/>
            in my spare time. Therefore, I'm learning react and building my own website!
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>
    )
}
}