import "./CustomButton.scss";
import React from "react";

const CustomButton = ({
  children,
  styles,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${styles} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
