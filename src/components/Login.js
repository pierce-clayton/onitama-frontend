import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let className = "is-info";

  if (props.type === 2) {
    className = "is-danger";
  }

  // will need to talk to backend
  const handlesLoginBtn = () => {
    props.setUser({ username, password });
  };
  return (
    <div>
      <h2 className="title is-4 has-text-centered">Player {props.type}</h2>
      <div className="field">
        <div className="control">
          <input
            className={`input ${className}`}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className={`input ${className}`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className={`button ${className}`} onClick={handlesLoginBtn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
