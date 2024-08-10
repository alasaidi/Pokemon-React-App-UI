import { useState } from "react";
import { create } from "../../services/pokemonServices";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const LoginPage = () => {
  const navigate = useNavigate();
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
      navigate("/");
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
            <img className="logo" src="/header.png" alt="Pokémon Trainer Club logo" />
          </div>
          <h2>Log in to your Pokémon Account </h2>
          <form className="sign-in-form">
            <div className="input-wrapper">
              <input className="input" type="text" id="email" name="email" placeholder="Username" value={request.email} onChange={handleInput} />
            </div>
            <div className="input-wrapper">
              <div className="password-input-field-wrapper">
                <input className="input password-input" type="text" id="password" name="password" placeholder="Password" value={request.password} onChange={handleInput} />
              </div>
            </div>
            <button type="button" className="button sign-in-button" id="accept" value="Log In" onClick={handleSubmit}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
