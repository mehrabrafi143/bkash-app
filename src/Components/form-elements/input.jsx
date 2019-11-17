import React from "react";

const Input = ({
  name,
  value,
  type = "text",
  label,
  error,
  onChange,
  icon
}) => {
  return (
    <div className="form__element">
      <div className="form__icon">
        <img src={icon} alt="icon" />
      </div>
      <input
        type={type}
        className="form__input"
        id={name}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        icon={icon}
      />
      <small id="emailHelp" className="form-text text-danger">
        {error ? error : null}
      </small>
    </div>
  );
};

export default Input;
