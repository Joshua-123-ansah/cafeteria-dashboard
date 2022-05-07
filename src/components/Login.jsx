import "./styles/auth.css";
import { useState } from "react";
import {auth} from "../firebase"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState("");

  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        username,
        password,
      );
           navigate("/dashboard");
    } catch (error) {
      SetError("Invalid Email or Password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "5rem" }} className="container">
          <div className="wrapper">
            <div className="title">
              <h2>Login to Admin </h2>
            </div>

            <div className="p-one">
              <p>Welcome to Cafeteria Dashboard</p>
            </div>

            <div style={{ color: "red" }}>
              <p>{error}</p>
            </div>

            <div className="inp">
              <label className="email" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="email-margin"
                type="email"
                id="email"
                placeholder="joshua@gmail.com"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />

              <label className="pass" for="pass">
                {" "}
                Password{" "}
              </label>

              <input
                type="password"
                id="pass"
                placeholder="6+ strong character"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <button className="btn" type="submit">
              Login to account{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
