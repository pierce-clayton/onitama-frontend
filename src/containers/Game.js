import React, { Component } from "react";
// import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import Cable from '../components/Cable';
class Game extends Component {
  state = {
    games: [],
    activeGame: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/games`)
    .then(r => r.json())
    .then(games => this.setState({games}))
  }

  render() {
    return <div>Game!</div>;
  }
}

export default Game;
