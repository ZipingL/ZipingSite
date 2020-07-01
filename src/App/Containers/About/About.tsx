// @ts-ignore
import logo from "../../Assets/linkedin.png";
import React from "react";

export class About extends React.Component {
    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Not much to see yet. Follow my website progress on{' '}
                    <a href="https://github.com/ZipingL/ZipingSite">Github</a>
                </p>
                <a
                    className="App-link"
                    href="https://linkedin.com/in/liu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin
                </a>
            </header>
        )
    }
}