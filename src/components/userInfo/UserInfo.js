import React from "react";

export const UserInfo = ({ user }) => {
  const { name, lastName } = user;
  return (
    <div className="card user-info">
      <h2>
        Welcome {name} {lastName} to Crypto comparator
      </h2>
    </div>
  );
};
