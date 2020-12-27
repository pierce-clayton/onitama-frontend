import "./App.css";
import LandingPage from "./components/LandingPage";
import Game from "./containers/Game";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  return (
    <Router>
      <div className="is-centered">
        <figure className="image p-6">
          <img
            src="../images/OnitamaLogo.svg.png"
            alt="onitama logo in black"
          />
        </figure>
      </div>

      <div className="container p-3">
        <Route exact path="/">
          <LandingPage
            user1={user1}
            setUser1={setUser1}
            user2={user2}
            setUser2={setUser2}
          />
        </Route>
        <Route exact path="/game" component={Game} />
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Onitama</strong> by <a href="www.google.com">Cool people</a>
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
