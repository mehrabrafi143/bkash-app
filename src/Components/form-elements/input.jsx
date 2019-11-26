import React from "react";

const Input = ({
  name,
  value,
  type = "text",
  label,
  error,
  onChange,
  icon,
  iconClasses
}) => {
  return (
    <div className="form__element">
      <div className="form__icon">
        {icon ? (
          <img src={icon} alt="icon" />
        ) : (
          <i className={iconClasses + " form__icon"}></i>
        )}
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
