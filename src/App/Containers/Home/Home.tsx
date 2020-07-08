// @ts-ignore
import logo from "../../Assets/linkedin3.png";
import React from "react";

export class Home extends React.Component {
render() {
    return(
    <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Welcome! How do you do?</h1>
        <p>
            Hey I'm Ziping Liu. You can also call me Z. Welcome to my resume website.
            I'm a recent graduate in computer engineering from UT Austin. I'm trying to learn web development
            in my spare time. Therefore, I'm learning react and building my own website! On and not to 
            mention I'm also using single-spa as well! 
        </p>
        <h2>Who am I?</h2>
        <p>
            Not much to say here. Born in China. Came to the States when I was four years old. I've lived
            in Michigan, Texas, and now Washington State! Yeah,
            so I can speak some Chinese. English is my main language though. I didn't really know
            what I wanted to do growing up, so I just picked a major. Some how found coding to be quite
            fun so decided to go for software engineering jobs. 
        </p>
    </div>
    )
}
}