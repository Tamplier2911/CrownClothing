import "./FormInput.scss";
import React from "react";

const FormInput = ({
  onInputChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="input__wrapper">
      <input
        className={`form__input`}
        onChange={onInputChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
