import React from "react";

const TestComponent = ({ name, email, children }) => {
  return (
    <div style={{ display: "grid", justifyContent: "center", padding: "2rem" }}>
      <div
        style={{
          display: "grid",
          padding: "2rem",
          border: ".1rem solid #333",
          borderRadius: ".5rem",
          boxShadow: "0 2rem 4rem #00000030"
        }}
      >
        <div>{name}</div>
        <div>{email}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TestComponent;
