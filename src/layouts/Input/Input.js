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

export default Input;
