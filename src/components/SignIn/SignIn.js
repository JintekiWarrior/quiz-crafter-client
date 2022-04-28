import "../../css/loginForm.scss";
import React, { useState } from "react";
import { signIn } from "./../../api/auth";
import { withRouter } from "react-router-dom";

// Sign in component
// Controls the Sign in component accessed by clicking Sign In on the navbar
const SignIn = ({ setUser, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event to handle the sign in request sent to the server.
  const onSignIn = (event) => {
    event.preventDefault();

    const EnterUser = async () => {
      try {
        const res = await signIn(email, password);
        setUser(res.data.user);
        history.push("/");
      } catch (error) {
        console.log("error message: ", error);
      }
    };

    EnterUser();
  };

  // JSX component
  return (
    <div className="sign-in">
      <h2 className="sign-in__heading" variant="h4" align="center">
        Sign In
      </h2>
      <form className="sign-in__form" noValidate onSubmit={onSignIn}>
        <input
          className="sign-in__input"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          color="primary"
          required
        />
        <input
          className="sign-in__input"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          color="primary"
          required
        />
        <button
          className="sign-in__btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
