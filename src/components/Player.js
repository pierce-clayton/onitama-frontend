import React from "react";
import PlayerInfo from "./PlayerInfo";
import Login from "./Login";
const Player = (props) => {
  return (
    <div>
      {props.user ? (
        <PlayerInfo type={props.player} user={props.user} />
      ) : (
        <Login type={props.player} setUser={props.setUser} />
      )}

      <p>Handles player state changes</p>
    </div>
  );
};

export default Player;
