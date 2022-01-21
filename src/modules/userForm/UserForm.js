import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const [data, setData] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const dataform = { ...data };
    dataform[name] = value;
    setData(dataform);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/crypto");
  };

  const { name, lastName, phone, email } = data;
  return (
    <div className="container container-user--form">
      <div className="card user-form">
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="" className="label-form">
              Name
            </label>
            <input
              required
              type="text"
              value={name}
              name="name"
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="label-form">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              name="lastName"
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="label-form">
              email
            </label>
            <input
              type="email"
              required
              value={email}
              name="email"
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <label htmlFor="" className="label-form">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              className="form-control"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
