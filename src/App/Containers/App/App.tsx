// @ts-ignore
import '../../Assets/App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from "../Home/Home";
import {About} from "../About/About"


export class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return(
        <div className="App">
          <main>
            <Switch>
                <Route path = "/" component={Home} exact />
                <Route path = "/about" component={About} />
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
