import React from "react";

export const UserInfo = ({ user }) => {
  const { name, lastName, email, phone } = user;
  return (
    <div className="card user-info">
      <h2>Welcome {name} to Crypto comparator</h2>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Last Name: <strong>{lastName}</strong>
      </p>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        Phone: <strong>{phone}</strong>
      </p>
    </div>
  );
};
