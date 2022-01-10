import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebaseServices";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    console.log("signin");
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // if success redirect to home
        if (userCredential) {
          history.push("/");
        }
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const register = (e) => {
    console.log("register");
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // if success redirect to home
        if (userCredential) {
          history.push("/");
        }
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
