import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({
  label,
  type,
  onChange,
  value,
  name,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
      ></input>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
