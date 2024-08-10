import "./button.css";
export const Button = ({ style = "login", action }) => {
  return (
    <button className={`button ${style}`} onClick={action}>
      {style}
    </button>
  );
};
