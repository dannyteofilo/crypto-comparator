import React from "react";

export const CryptoInfo = ({ title, data = [] }) => {
  const convertToMX = (value) => value * 20;
  return (
    <div className="card crypto-info">
      <h3 className="title">{title}</h3>
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2} className="value">
              {data.length !== 0
                ? Intl.NumberFormat().format(
                    convertToMX(data[data.length - 1].coin)
                  )
                : "Loading..."}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{Intl.NumberFormat().format(convertToMX(item.coin))} </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
