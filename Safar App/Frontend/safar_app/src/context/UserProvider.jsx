import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { userDataContext } from "./UserContext";
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
};
