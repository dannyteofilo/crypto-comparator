import React from "react";

export const UserForm = () => {
  const handleSubmit = (e) => {
    console.log("submiting");
  };
  return (
    <div className="container">
      <div className="card">
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit}></form>
      </div>
    </div>
  );
};
