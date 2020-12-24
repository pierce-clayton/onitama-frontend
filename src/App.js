import "./App.css";
import LogIn from "./containers/LogIn";
import Game from "./containers/Game";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        Start page!
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/game" component={Game} />
      </div>
    </Router>
  );
}

export default App;
