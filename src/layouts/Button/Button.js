import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ type, text, onClick, icon }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
};

export default Button;
