import React from "react";
import NewGame from "./NewGame";
import Player from "./Player";

const LandingPage = (props) => {
  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <Player player={1} user={props.user1} setUser={props.setUser1} />
        </div>
        <div className="column">
          <NewGame />
        </div>
        <div className="column is-one-quarter">
          <Player player={2} user={props.user2} setUser={props.setUser2} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
