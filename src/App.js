import "./App.css";
import LogIn from "./containers/LogIn";
import Game from "./containers/Game";
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route } from "react-router-dom";

import React, { Component } from 'react'

const history = createBrowserHistory()
export default class App extends Component {
  state = {
    searching: null,
    players: []
  }
  handleLogin = (user) => {
    if (this.state.searching){
      this.setState(({players}) => ({
        players: [...players, user],
        searching: null
      }))
      history.push('/game')
    }else{
      this.setState(({players}) => ({
        searching: user,
        players: players.push(user)
      }))
      
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
        Start page!
        {/* <Route exact path="/login" component={LogIn} /> */}
        <Route exact path="/login">
          <LogIn handleLogin={this.handleLogin}/>
        </Route>
        <Route exact path="/game">
          <Game players={this.state.players}/>
        </Route>
      </div>
    </Router>
    )
  }
}


