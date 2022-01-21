import React from "react";

export const Button = ({ title, active, click, position }) => {
  const handleClick = (e) => {
    click(position);
  };
  return (
    <button
      className={`button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
