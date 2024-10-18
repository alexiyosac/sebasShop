import React, { useState, createContext, useContext } from "react";


const UserContext = createContext();
const UserProvider  = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [array, setArray] = useState([]);

  return (
    <UserContext.Provider value={{ contador, array, setContador, setArray }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

