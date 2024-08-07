import { useState } from "react";
import { create } from "../../../services/pokemonServices";

import "./Login.css";

export const LoginPage = () => {
  const [request, setRequest] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setRequest((previous) => ({ ...previous, [name]: value }));
    console.log(request);
  };
  const handleSubmit = async () => {
    try {
      const result = await create(request);
      console.log("Player created:", result.data);

      // Clear the form or show a success message
    } catch (error) {
      console.error("Failed to create Player:", error);
      // Show an error message to the user
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="glass-effect">
          <div className="logo-wrapper">
            <img className="logo" src="../../../../public/header.png" alt="Pokémon Trainer Club logo" />
          </div>
          <h2>Log in to your Pokémon Account </h2>
          <form className="sign-in-form">
            <div className="input-wrapper">
              <input className="input" type="text" id="email" name="Email" placeholder="Username" value={request.Email} onChange={handleInput} />
            </div>
            <div className="input-wrapper">
              <div className="password-input-field-wrapper">
                <input className="input password-input" type="text" id="password" name="Password" placeholder="Password" value={request.Password} onChange={handleInput} />
              </div>
            </div>
            <button type="button" className="button sign-in-button" id="accept" value="Log In" onClick={handleSubmit}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
