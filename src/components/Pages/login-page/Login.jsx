import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="glass-effect">
          <div className="logo-wrapper">
            <img className="logo" src="../../../../public/header.png" alt="Pokémon Trainer Club logo" />
          </div>
          <h2>Log in to your Pokémon Account </h2>
          <form className="sign-in-form" action="/login" method="POST">
            <div className="input-wrapper">
              <input className="input" type="text" id="email" name="email" placeholder="Username" />
            </div>
            <div className="input-wrapper">
              <div className="password-input-field-wrapper">
                <input className="input password-input" type="password" id="password" name="password" placeholder="Password" />
              </div>
            </div>
            <input className="button sign-in-button" type="submit" id="accept" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};
