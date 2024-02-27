import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/SignIn.css";
import Footer from "../components/footer/Footer";
import userData from "../user.json";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [users, setUsers] = useState(userData);

  const handleSignIn = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      navigate("/user");
    } else {
      alert("Identifiant incorrect veillez a re éssayer !!");
    }
  };

  return (
    <div>
      <NavLink to="/">
        <img
          className="main-logo-signin"
          src="./img/argentBankLogo.png"
          alt=""
        />
      </NavLink>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
