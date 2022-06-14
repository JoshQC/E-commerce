import "./Button.scss";

const Button = ({ type, text, onClick, icon }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
