import React, { useEffect, useState } from "react";
import { UserInfo } from "../../components/userInfo/UserInfo";

export const CryptoComparator = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    setUser(localUser);
  }, []);

  return (
    <div className="container container-crypto">
      <UserInfo user={user} />
      <div className="user card"></div>
    </div>
  );
};
